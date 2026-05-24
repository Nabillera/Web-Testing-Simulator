import "./App.css";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { AppContent } from "./AppContent";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
