import React from "react";

const Training = () => {
  return (
    <>
      <div style={{backgroundColor: "#efeeee", position: 'relative', top: '20px'}} class="container-fluid border-top border-success">
        <div className="container">
        <div class="row">
          <div style={{marginTop: '20px'}} class="col-md-12 text-center">
            <h3>Online & Offline Courses</h3>
          </div>
        </div>
        <div style={{position: 'relative', top: '20px'}} class="row">
          <div style={{padding: '2rem'}} class="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <img src="./images/classroom.png" alt="" />
            <p>Massmatic has advanced training labs equiped with best in class tools and systems which provides a student the mass ideal environment to grasp the skills required in an enterprise information security team. Currently our labs are only located in New Delhi & In Punjab (Ropar), India.</p>
          </div>
          <div style={{padding: '2rem'}} class="col-md-6  d-flex flex-column justify-content-center align-items-center">
            <img src="/images/fly-01.png" alt="" />
            <p>A customised training programme to suit the requirements of an enterprise/academic institutiuons, we provide this facility where you can invite our experts at your premises to conduct the various courses that we have to offers.</p>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default Training;
