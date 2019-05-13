import React, { Component } from "react";
import {} from "../../assets/css/counter.css";

export class Odometer extends Component {
  render() {
   
    return (
      <div className="odometer-container">
        <div id="odometer" className="odometer">
          10
        </div>
      </div>
    );
  }
}

export default Odometer;
