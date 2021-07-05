import React from 'react'

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title about__title">
            More Information <br /> About The Best Beaches
          </h2>
          <p className="about__description">
            You can find the most beautiful and pleasant places at the best prices with special
            discounts, you choose the place we will guide you all the way to wait, get your place
            now.
          </p>
          <a href="/" className="button">
            Reserve a place
          </a>
        </div>

        <div className="about__img">
          <div className="about__img-overlay">
            <img src="assets/img/about1.jpg" alt="" className="about__img-one" />
          </div>

          <div className="about__img-overlay">
            <img src="assets/img/about2.jpg" alt="" className="about__img-two" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
