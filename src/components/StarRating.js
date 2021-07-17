import React from 'react'
import './StarRating.css'
import { FaStar } from 'react-icons/fa'
import { useState } from 'react/cjs/react.development'


function StarRating(props) {

const [rating,setRating] = useState(props.numOfstars)
const [hover, setHover] = useState(null)

    return (
        <div>
        {[ ...Array(5)].map((star, i) => {
         const ratingValue = i + 1; 
            
         return (
             <label>
                 <input type='radio' 
                 name='rating' 
                 value={ratingValue} 
                 />
                 <FaStar className='star' size = '40'
                 color = {ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9' }
                 />

             </label>
         ) 
         })}  

        </div>
    )
}

export default StarRating
