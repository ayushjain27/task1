import React from "react";
import styles from './Teams.module.css'

const Teams = () => {
  return (
    <>
      <div
        style={{ position: "relative", top: "50px" }}
        className="container d-flex justify-content-center">
        <div class="container">
          <div class="row">
            <div style={{marginBottom: '12px'}} class="col-md-12">
              <h3 class="d-flex justify-content-center">Our Team</h3>
              <div class={styles.line}>
                <div class={styles.circle}></div>
              </div>
            </div>
          </div>
          <div class="row">
          <div class={`${styles.card} col-md-3`}>
              <div style={{ backgroundColor: "#efeeee" }} class="card">
                <img
                  src="/images/Amit.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Amit Malhotra</h5>
                  <a
                    style={{ textDecoration: "none", marginTop: "4px", fontSize: '12px' }}
                    href=""
                  >
                    CEO
                  </a>
                  <div
                    style={{
                      width: "50px",
                      height: "2px",
                      backgroundColor: "#000",
                      margin: "10px auto",
                    }}
                  ></div>
                  <p class="card-text">
                  Amit Malhotra has been awarded the title of "Cyber Crime Investigation Specialist" at All India Police Training Partners in 2016.
                  </p>
                </div>
              </div>
            </div>
            <div class={`${styles.card1} col-md-3`}>
              <div style={{ backgroundColor: "#efeeee" }} class="card">
                <img
                  src="/images/Vishwanath.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Vishwanath Agarwal</h5>
                  <a
                    style={{ textDecoration: "none", marginTop: "4px", fontSize: '12px' }}
                    href=""
                  >
                    MANAGING DIRECTOR
                  </a>
                  <div
                    style={{
                      width: "50px",
                      height: "2px",
                      backgroundColor: "#000",
                      margin: "10px auto",
                    }}
                  ></div>
                  <p class="card-text">
                    He is a Founder Trustie in Maharaja Agrasen Hospital & President Agarwal Sabha & Founder Trustee (Delhi)of ABCSS
                  </p>
                </div>
              </div>
            </div>
            <div class={`${styles.card2} col-md-3`}>
              <div style={{ backgroundColor: "#efeeee" }} class="card">
                <img
                  src="/images/Harpreet.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body text-center">
                  <h5 class="card-title">Harpreet Singh</h5>
                  <a
                    style={{ textDecoration: "none", marginTop: "4px", fontSize: '12px' }}
                    href=""
                  >
                    MANAGING DIRECTOR (PUNJAB)
                  </a>
                  <div
                    style={{
                      width: "50px",
                      height: "2px",
                      backgroundColor: "#000",
                      margin: "10px auto",
                    }}
                  ></div>
                  <p class="card-text">
                    Harpreet is a Expert From Infosys.He is Punjab Police
                    Advisor working with Punjab Police to fight with Cyber
                    Criminals.
                  </p>
                </div>
              </div>
            </div>
            <div class={`${styles.card3} col-md-3`}>
              <div style={{ backgroundColor: "#efeeee" }} class="card">
                <img src="/images/vicky.jpg" class="card-img-top" alt="..." />
                <div class="card-body text-center">
                  <h5 class="card-title">Vicky Mishra</h5>
                  <a
                    style={{ textDecoration: "none", marginTop: "4px", fontSize: '12px' }}
                    href=""
                  >
                    IT HEAD
                  </a>
                  <div
                    style={{
                      width: "50px",
                      height: "2px",
                      backgroundColor: "#000",
                      margin: "10px auto",
                    }}
                  ></div>
                  <p class="card-text">
                    He is IT Head with the complete knowledge of Computer
                    Hardware & Networking to find bugs in the Network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
