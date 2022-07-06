import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src="/images/logo.png" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            style={{ textAlign: "center" }}
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MASSMATIC PORTAL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  MASSMATIC COURSES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TRAINING & WORKSHOPS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  IMPORTANT LINKS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    );
  }
}

export default Navbar;
