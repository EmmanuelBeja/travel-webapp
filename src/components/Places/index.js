import React from 'react'

const Places = () => {
  return (
    <section className="place section" id="place">
      <h2 className="section__title">Choose Your Place</h2>

      <div className="place__container container grid">
        <div className="place__card">
          <img src="assets/img/place1.jpg" alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">4,8</span>
            </span>

            <div className="place__data">
              <h3 className="place__title">Bali</h3>
              <span className="place__subtitle">Indonesia</span>
              <span className="place__price">$2499</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="place__card">
          <img src="assets/img/place2.jpg" alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">5,0</span>
            </span>

            <div className="place__data">
              <h3 className="place__title">Bora Bora</h3>
              <span className="place__subtitle">Polinesia</span>
              <span className="place__price">$1599</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="place__card">
          <img src="assets/img/place3.jpg" alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">4,9</span>
            </span>

            <div className="place__data">
              <h3 className="place__title">Hawaii</h3>
              <span className="place__subtitle">EE.UU</span>
              <span className="place__price">$3499</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="place__card">
          <img src="assets/img/place4.jpg" alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">4,8</span>
            </span>

            <div className="place__data">
              <h3 className="place__title">Whitehaven</h3>
              <span className="place__subtitle">Australia</span>
              <span className="place__price">$2499</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>

        <div className="place__card">
          <img src="assets/img/place5.jpg" alt="" className="place__img" />

          <div className="place__content">
            <span className="place__rating">
              <i className="ri-star-line place__rating-icon"></i>
              <span className="place__rating-number">4,8</span>
            </span>

            <div className="place__data">
              <h3 className="place__title">Hvar</h3>
              <span className="place__subtitle">Croacia</span>
              <span className="place__price">$1999</span>
            </div>
          </div>

          <button className="button button--flex place__button">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Places
