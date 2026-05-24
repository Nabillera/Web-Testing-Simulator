import { Routes, Route, Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { Sidebar } from "./components/Sidebar";
import { LandingPage } from "./components/LandingPage";
import { SignUpPage } from "./components/Sign_Up/SignUpPage";
import { LevelZero } from "./components/Level_0/LevelZero";
import { LevelOne } from "./components/Level_1/LevelOne";
import { LevelTwo } from "./components/Level_2/LevelTwo";
import { LevelThree } from "./components/Level_3/LevelThree";
import { LevelFour } from "./components/Level_4/LevelFour";
import { RequirementsModal } from "./components/RequirementsModal";
import { ReportForm } from "./components/ReportForm";
import { REQUIREMENTS } from "../DATA/Level_requirements";
import { WarningModal } from "./components/WarningModal";
import { useState, useEffect } from "react";

export function AppContent({}) {
  const [requirementsOpen, setRequirementsOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [sessionTracking, setSessionTracking] = useState({
    sessionStarted: false,
    startTime: null,
    elapsedTime: 0,
  });

  const location = useLocation();
  const levelId = location.pathname.split("-")[1];
  const hideSidebar =
    location.pathname == "/sign-up" || location.pathname == "/sign-in";

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
    setReportOpen(() => !reportOpen);
  };

  useEffect(() => {
    setSessionId(crypto.randomUUID());
    setSessionTracking({
      sessionStarted: false,
      startTime: null,
      elapsedTime: 0,
    });
    if (location.pathname.startsWith("/level-")) {
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
          sessionId={sessionId}
          levelId={levelId}
          elapsedTime={sessionTracking.elapsedTime}
        />
      )}
      <Routes>
        <Route path="/sign-in" element={<SignUpPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/level-0" element={<LevelZero />} />
        <Route path="/level-1" element={<LevelOne />} />
        <Route path="/level-2" element={<LevelTwo />} />
        <Route path="/level-3" element={<LevelThree />} />
        <Route path="/level-4" element={<LevelFour />} />
      </Routes>

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
          />,
          document.body,
        )}
    </div>
  );
}
