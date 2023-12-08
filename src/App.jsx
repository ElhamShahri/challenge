import { Component, useState } from "react";
import ErrorBoundary from "./components/modules/ErrorBoundary";
import ArvanRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {


  return (
    <>
      <BrowserRouter>
        {/* <ErrorBoundary> */}
          <ArvanRoutes />
        {/* </ErrorBoundary> */}
      </BrowserRouter>
    </>
  );
}

export default App;
