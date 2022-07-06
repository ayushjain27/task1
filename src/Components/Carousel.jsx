import React from 'react';

const Carousel = () => {
  return (
   <>
   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators rounded">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/winner.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/images/start1.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <a className="btn btn-primary" href="/">Know more</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/start18.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <a className="btn btn-primary" href="/">Know more</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/trophy.png" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <a className="btn btn-primary" href="/">Know more</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/start19.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <a className="btn btn-primary" href="/">Know more</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/start17.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <a className="btn btn-primary" href="/">Know more</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/start20.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <a className="btn btn-primary" href="/">Know more</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/start2.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <a className="btn btn-primary" href="/">Know more</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/start3.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <a className="btn btn-primary" href="/">Know more</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/images/start4.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <a className="btn btn-primary" href="/">Know more</a>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></>
  )
}

export default Carousel
