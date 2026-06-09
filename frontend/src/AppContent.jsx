import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { createPortal } from "react-dom";
import { Sidebar } from "./components/Sidebar";
import { LandingPage } from "./components/LandingPage";
import { AuthenticationPage } from "./components/Sign_Up/AuthenticationPage";
import { LevelZero } from "./components/Level_0/LevelZero";
import { LevelOne } from "./components/Level_1/LevelOne";
import { LevelTwo } from "./components/Level_2/LevelTwo";
import { LevelThree } from "./components/Level_3/LevelThree";
import { LevelFour } from "./components/Level_4/LevelFour";
import { RequirementsModal } from "./components/Modals/RequirementsModal";
import { ReportHintsModal } from "./components/Modals/ReportHintsModal";
import DocIcon from "./assets/doc-icon.svg";
import { ReportForm } from "./components/Modals/ReportForm";
import { REQUIREMENTS } from "../DATA/Level_requirements";
import { WarningModal } from "./components/Modals/WarningModal";
import { useState, useEffect } from "react";
import { CompletionModal } from "./components/Level_Completion/CompletionModal";
import { BUG_ICONS } from "../DATA/Completion_modal_icons";
import { LoadingModal } from "./components/Modals/LoadingModal";
import { useAuth } from "./context/AuthContext";

export function AppContent() {
  const [requirementsOpen, setRequirementsOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);
  const [hintsOpen, setHintsOpen] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(null);
  const [loading, setLoading] = useState({
    active: false,
    loadingMessage: "",
  });
  const [sessionId, setSessionId] = useState("");
  const [sessionTracking, setSessionTracking] = useState({
    sessionStarted: false,
    startTime: null,
    elapsedTime: 0,
  });
  const [completionStatus, setCompletionStatus] = useState({
    completionOpen: false,
    completionSummary: null,
  });

  const location = useLocation();
  const levelId = location.pathname.split("-")[1];
  const isLevelOpen = location.pathname.startsWith("/level-");
  const hideSidebar =
    location.pathname == "/sign-up" || location.pathname == "/sign-in";
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleNavigation = (destination) => {
    if (isLevelOpen && sessionTracking.sessionStarted) {
      setPendingNavigation(destination);
      setWarningOpen(true);
      return;
    }
    navigate(destination);
  };

  const handleWarningModal = (isLeaving) => {
    setWarningOpen(false);
    if (isLeaving) {
      navigate(pendingNavigation);
    } else {
      setPendingNavigation(null);
    }
  };

  const handleRequirementsModal = () => {
    setRequirementsOpen((prev) => {
      const nextState = !prev;
      if (
        prev == true &&
        nextState == false &&
        !sessionTracking.sessionStarted
      ) {
        setSessionTracking((prevSession) => ({
          ...prevSession,
          startTime: Date.now(),
          sessionStarted: true,
        }));
      }
      return nextState;
    });
  };

  const handleReportForm = () => {
    setReportOpen((prev) => !prev);
  };

  const handleCompletionModal = () => {
    setCompletionStatus({ completionOpen: false, completionSummary: null });
  };

  const handleCompleteLevel = async () => {
    setLoading({ active: true, message: "Fetching your results..." });
    try {
      const response = await fetch(
        `http://localhost:5000/api/evaluations/finish/${sessionId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            completionTime: sessionTracking.elapsedTime,
            level: Number(levelId),
            userId: currentUser?.uid || null,
            isAnonymous: currentUser?.isAnonymous || false,
          }),
        },
      );
      const result = await response.json();
      console.log(result);
      setSessionTracking((prev) => ({
        ...prev,
        sessionStarted: false,
      }));

      const reportIcons = result.evaluations.map((report) => ({
        ...report,
        icon: BUG_ICONS[Math.floor(Math.random() * BUG_ICONS.length)],
      }));
      setCompletionStatus({
        completionOpen: true,
        completionSummary: { ...result, evaluations: reportIcons },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading({ active: false, message: "" });
    }
  };

  useEffect(() => {
    setSessionId(crypto.randomUUID());
    setSessionTracking({
      sessionStarted: false,
      startTime: null,
      elapsedTime: 0,
    });
    if (isLevelOpen) {
      setRequirementsOpen(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    let interval;
    if (sessionTracking.sessionStarted && sessionTracking.startTime) {
      interval = setInterval(() => {
        setSessionTracking((prev) => ({
          ...prev,
          elapsedTime: Math.floor(Date.now() - prev.startTime) / 1000,
        }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [sessionTracking.sessionStarted, sessionTracking.startTime]);

  return (
    <div className="flex h-full">
      {!hideSidebar && (
        <Sidebar
          location={location}
          onViewRequirements={handleRequirementsModal}
          onViewReport={handleReportForm}
          onCompleteLevel={handleCompleteLevel}
          onNavigation={handleNavigation}
        />
      )}
      <Routes>
        <Route path="/sign-in" element={<AuthenticationPage />} />
        <Route path="/sign-up" element={<AuthenticationPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/level-0" element={<LevelZero />} />
        <Route path="/level-1" element={<LevelOne />} />
        <Route path="/level-2" element={<LevelTwo />} />
        <Route path="/level-3" element={<LevelThree />} />
        <Route path="/level-4" element={<LevelFour />} />
      </Routes>
      {isLevelOpen && (
        <img
          onClick={() => setHintsOpen(true)}
          src={DocIcon}
          title="Bug report hints!"
          className="absolute top-[122px] right-[50px] cursor-pointer"
        />
      )}
      {requirementsOpen &&
        createPortal(
          <RequirementsModal
            onClose={handleRequirementsModal}
            requirements={REQUIREMENTS[levelId]}
            level={levelId}
          />,
          document.body,
        )}

      {reportOpen &&
        createPortal(
          <ReportForm
            onClose={handleReportForm}
            level={levelId}
            sessionId={sessionId}
            onStartLoading={(message) => setLoading({ active: true, message })}
            onStopLoading={() => setLoading({ active: false, message: "" })}
          />,
          document.body,
        )}

      {completionStatus.completionOpen &&
        createPortal(
          <CompletionModal
            completionSummary={completionStatus.completionSummary}
            onClose={handleCompletionModal}
          />,
          document.body,
        )}

      {warningOpen &&
        createPortal(
          <WarningModal onHandleModal={handleWarningModal} />,
          document.body,
        )}

      {loading.active &&
        createPortal(
          <LoadingModal loadingMessage={loading.message} />,
          document.body,
        )}

      {hintsOpen &&
        createPortal(
          <ReportHintsModal onClose={() => setHintsOpen(false)} />,
          document.body,
        )}
    </div>
  );
}
