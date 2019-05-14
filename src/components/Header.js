import React from "react";
import logo from '../assets/img/logo.png'

export default function Header() {
  return (
    <section className="container-fluid header bg-dark text-center">
      <div className="row">
        <div className="col">
          <img src={logo} width="100px" alt=""/>
        </div>
      </div>
    </section>
  );
}
