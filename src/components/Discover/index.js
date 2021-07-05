import React from 'react'

import DiscoverCard from './DiscoverCard'

import places from './placesData'

const Discover = () => {
  return (
    <section className="discover section" id="discover">
      <h2 className="section__title">
        Discover the most <br /> attractive places
      </h2>

      <div className="discover__container container swiper-container">
        <div className="swiper-wrapper">
          {places.map((place, index) => (
            <DiscoverCard place={place} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Discover
