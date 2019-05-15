import React from "react";
import imgUrl from "../assets/img/puppy-pug-transparent-background.png";

export default function Footer() {
  return (
    <section className="container-fluid bg-dark text-white footer">
      <div className="row">
        <div className="col-md-1 mr-5" />
        <div className="col-md-4">
          <h5>Did you know?</h5>
          <h1>The First Slot Machine </h1>
          <p
            style={{
              borderLeft: "1px solid #fff",
              padding: "0 0 0 25px",
              margin: "30px 0 40px 20px"
            }}
          >
            Charles Fey was credited with the invention of the first slot
            machine in 1895.
            <br />
            He was a San Franciscan mechanic who worked for a company and later
            started his own company. The first slot machine was not played in a
            casino.
            <br /> <br />
            Fey’s Liberty Bell machine was placed at his auto shop where his
            customers could enjoy themselves while waiting for their vehicles to
            be repaired.
            <br />
            Seeing the popularity of the slot machines, many casinos introduced
            these machines in their casinos so that their gamblers could play
            when table games would be occupied.
            <br />
            <br />
          </p>
          <a
            className="btn btn-outline-light btn-lg"
            style={{ letterSpacing: "1.5px" }} href="https://github.com/raymaen/Pug-Casino"  target="_blank"
          >
            View Project On Github <i class="fab fa-github ml-3" />
          </a>
        </div>
        <div className="col-md-5 ml-5">
          <img src={imgUrl} width="400px" alt="" />
        </div>
      </div>
    </section>
  );
}
