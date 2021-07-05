import React from 'react'

const DiscoverCard = ({ place }) => {
  const { image, name, tours } = place
  return (
    <>
      <img src={image} alt="" className="discover__img" />
      <div className="discover__data">
        <h2 className="discover__title">{name}</h2>
        <span className="discover__description">{tours} tours available</span>
      </div>
    </>
  )
}

export default DiscoverCard
