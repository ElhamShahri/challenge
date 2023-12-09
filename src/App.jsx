import { Component, useState } from "react";
import ErrorBoundary from "./components/modules/ErrorBoundary";
import ArvanRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <Toaster />
          <ArvanRoutes />
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
