import React from 'react'

const DiscoverCard = ({ place }) => {
  const { image, name, tours } = place
  return (
    <div className="discover__card swiper-slide">
      <img src={image} alt="" className="discover__img" />
      <div className="discover__data">
        <h2 className="discover__title">{name}</h2>
        <span className="discover__description">{tours} tours available</span>
      </div>
    </div>
  )
}

export default DiscoverCard
