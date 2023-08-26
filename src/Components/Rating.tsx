import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';

function Rating () {

 const [rating, setStar] = useState(null);
 const [hover, setHover] = useState(null);

  return (

   <div className="mt-4">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (

          <label>
            <input
              className="d-none"
              type="radio"
              name="rating"
              value={currentRating}

              onClick={() => setStar(currentRating)}
            />
            <FaStar 
              size={30}

              color={currentRating <= (hover || rating) ? "#FFD700" : "#808080"}

              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        )
      })}
   </div>
  );
};

export default Rating;