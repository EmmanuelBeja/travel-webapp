import React from 'react'

import DiscoverCard from './DiscoverCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'

import places from './placesData'

const Discover = () => {
  return (
    <section className="discover section" id="discover">
      <h2 className="section__title">
        Discover the most <br /> attractive places
      </h2>

      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        grabCursor={true}
        className="discover__container container swiper-container"
      >
        {places.map((place, index) => (
          <SwiperSlide className="discover__card" key={index}>
            <DiscoverCard place={place} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Discover
