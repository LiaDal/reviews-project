import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

const Rating = () => {
  const [rating, setStar] = useState<number>(0)
  const [hover, setHover] = useState<number>(0)

  return (
    <div className="mt-4">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1
        return (
          <React.Fragment key={index}>
            <label>
              <input
                className="d-none"
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => {
                  setStar(currentRating)
                }}
              />
              <FaStar
                size={30}
                color={currentRating <= ((hover as number) || rating) ? '#FFD700' : '#808080'}
                onMouseEnter={() => {
                  setHover(currentRating)
                }}
                onMouseLeave={() => {
                  setHover(0)
                }}
              />
            </label>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Rating
