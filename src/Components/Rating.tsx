import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

function Rating() {
  const [rating, setStar] = useState<any>(null)
  const [hover, setHover] = useState<any>(null)

  return (
    <div className="mt-4">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1
        return (
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
              color={currentRating <= ((hover as boolean) || rating) ? '#FFD700' : '#808080'}
              onMouseEnter={() => {
                setHover(currentRating)
              }}
              onMouseLeave={() => {
                setHover(null)
              }}
            />
          </label>
        )
      })}
    </div>
  )
}

export default Rating
