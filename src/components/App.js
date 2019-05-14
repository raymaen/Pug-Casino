import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/main.css";
import "@fortawesome/fontawesome-free/css/all.css";

import Header from "./Header";
import Footer from "./Footer";
import Finance from "./finance/Finance";
import Board from "./board/Board";
import Chart from "./charts/Chart";

export default function App() {
  return (
    <div>
      {/* <Header /> */}
      <AppBody />
      <Footer />
    </div>
  );
}

const AppBody = () => (
  <div className="container-fluid app-body">
    <div className="row pb-4">
     
    <div className="col-md-3 history">
        <Chart />
      </div>
      
      <div className="col-md-6 board text-center">
        <Board />
      </div>

      <div className="col-md-3 finance">
        <Finance />
      </div>
     
    </div>
  </div>
);
