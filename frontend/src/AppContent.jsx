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
import { REQUIREMENTS } from "../DATA/Level_data";
import { WarningModal } from "./components/WarningModal";

export function AppContent({
  requirementsOpen,
  handleRequirementsModal,
  reportOpen,
  handleReportForm,
}) {
  const location = useLocation();
  const levelId = location.pathname.split("-")[1];
  const hideSidebar =
    location.pathname == "/sign-up" || location.pathname == "/sign-in";

  return (
    <div className="flex h-full">
      {!hideSidebar && (
        <Sidebar
          onViewRequirements={handleRequirementsModal}
          onViewReport={handleReportForm}
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
        createPortal(<ReportForm onClose={handleReportForm} />, document.body)}
    </div>
  );
}
