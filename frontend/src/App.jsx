import "./App.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { AppContent } from "./AppContent";

function App() {
  const [requirementsOpen, setRequirementsOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  const handleRequirementsModal = () => {
    setRequirementsOpen(() => !requirementsOpen);
  };

  const handleReportForm = () => {
    setReportOpen(() => !reportOpen);
  };

  return (
    <BrowserRouter>
      <Header />
      <AppContent
        requirementsOpen={requirementsOpen}
        reportOpen={reportOpen}
        handleRequirementsModal={handleRequirementsModal}
        handleReportForm={handleReportForm}
      />
    </BrowserRouter>
  );
}

export default App;
