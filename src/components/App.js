import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/main.css";
import "@fortawesome/fontawesome-free/css/all.css";

import Header from "./Header";
import Footer from "./Footer";
import Finance from "./finance/Finance";
import Board from "./board/Board";
import History from "./history/History";

export default function App() {
  return (
    <div>
      <Header />
      <AppBody />
      <Footer />
    </div>
  );
}

const AppBody = () => (
  <div className="container-fluid app-body">
    <div className="row">
      <div className="col-md-2 finance">
        <Finance />
      </div>
      <div className="col-md-8 board text-center">
        <Board />
      </div>
      <div className="col-md-2 history">
        <History />
      </div>
    </div>
  </div>
);
