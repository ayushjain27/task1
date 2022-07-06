import React from "react";

const CourseCard = () => {
  return (
    <>
      <div  class="container">
        <div class="row p-3">
          <div style={{position: "relative", right: '4px', backgroundColor: "#efeeee"}} class="col-md-6 border-top border-success d-flex">
            <div> 
              <img style={{visibility: 'visible', animationDuration: '1.5s', animationDelay: '1s', animationName: 'fadeIn'}} class="animate__animated animate__fadeIn wow" data-wow-duration="5s" data-wow-delay="0s" src="/images/one.png" alt="" />
            </div>
            <div class="d-flex flex-column p-3">
              <h4 >Begineer's Level Course</h4>
              <h4 >(Duration-: 1 Month)</h4>
              <p> 
                Begineer's Dive into the world of Ethical Hacking & Cyber
                Security.
              </p>
              <div style={{padding: '4px 12px 0px 12px', textDecorartion: 'none', visibility: 'visible', animationDuration: '5s', animationDelay: '1s', animationName: 'fadeIn', display: 'flex', justifyContent: 'space-between', border: '2px solid black'}} class="animate__animated animate__fadeIn wow" data-wow-duration="5s" data-wow-delay="0s">
                    <p>Begineer's Level Course</p>
                    <a style={{textDecoration: 'none', color: 'red'}} href="/">More</a>
              </div>
            </div>
          </div>
          <div style={{position: "relative", left: '4px', backgroundColor: "#efeeee"}} class="col-md-6 border-top border-success d-flex">
            <div> 
              <img style={{visibility: 'visible', animationDuration: '1.5s', animationDelay: '1s'}} class="animate__animated animate__fadeIn wow" data-wow-duration="5s" data-wow-delay="0s" src="/images/one.png" alt="" />
            </div>
            <div class="d-flex flex-column p-3">
              <h4 >Advanced Level Course</h4>
              <h4 >(Duration-: 6 Months)</h4>
              <p> 
              A Dive with CEH (Certified Ethical Hacker)
              </p>
              <div style={{padding: '4px 12px 0px 12px', textDecorartion: 'none', visibility: 'visible', animationDuration: '5s', animationDelay: '1s',  display: 'flex', justifyContent: 'space-between', border: '2px solid black'}} class="animate__animated animate__fadeIn wow" data-wow-duration="5s" data-wow-delay="0s">
                    <p>Advanced Level Course</p>
                    <a style={{textDecoration: 'none', color: 'red'}} href="/">More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-3">
        <div style={{position: "relative", right: '4px', backgroundColor: "#efeeee"}} class="col-md-6 border-top border-success d-flex">
            <div> 
              <img style={{visibility: 'visible', animationDuration: '1.5s', animationDelay: '1s'}} class="animate__animated animate__fadeIn wow" data-wow-duration="5s" data-wow-delay="0s" src="/images/one.png" alt="" />
            </div>
            <div class="d-flex flex-column p-3">
              <h4 >Expert Level Course</h4>
              <h4 >(Duration-: 18 Months)</h4>
              <p> 
              Deep Dive into the world of Information Security & Cyber Security & Cyber Forensic.
              </p>
              <div style={{padding: '4px 12px 0px 12px', textDecorartion: 'none', visibility: 'visible', animationDuration: '5s', animationDelay: '1s',  display: 'flex', justifyContent: 'space-between', border: '2px solid black'}} class="animate__animated animate__fadeIn wow" data-wow-duration="5s" data-wow-delay="0s">
                    <p>Expert Level Course</p>
                    <a style={{textDecoration: 'none', color: 'red'}} href="/">More</a>
              </div>
            </div>
          </div>
          <div style={{position: "relative", left: '4px', backgroundColor: "#efeeee"}} class="col-md-6 border-top border-success d-flex">
            <div> 
              <img style={{visibility: 'visible', animationDuration: '1.5s', animationDelay: '1s'}} class="animate__animated animate__fadeIn wow" data-wow-duration="5s" data-wow-delay="0s" src="/images/one.png" alt="" />
            </div>
            <div class="d-flex flex-column p-3">
              <h4 >Certified Cyber Crime Investigation Officer Course</h4>
              <h4 >(Duration-: 3 Months)</h4>
              <p> 
                Begineer's Dive into the world of Ethical Hacking & Cyber
                Security.
              </p>
              <div style={{padding: '4px 12px 0px 12px', textDecorartion: 'none', visibility: 'visible', animationDuration: '5s', animationDelay: '1s',  display: 'flex', justifyContent: 'space-between', border: '2px solid black'}} class="animate__animated animate__fadeIn wow" data-wow-duration="5s" data-wow-delay="0s">
                    <p>CCCIO (Certified Cyber Crime Investigation Officer) Course</p>
                    <a style={{textDecoration: 'none', color: 'red'}} href="/">More</a>
              </div>
            </div>
          </div>
        </div>
        <div style={{textAlign:'center', display: 'flex', justifyContent: 'center'}}>
            <p style={{width: '30%', padding: '12px'}} class="border border-primary">Download Brochure</p>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
