import React from 'react'
import { Rating } from 'react-simple-star-rating'

const Star = ({rating}) => {
    return (
       
            <Rating  
            initialValue={4/2.0} 
            readonly size={20} 
            className='react-simple-star-rating' 
            SVGstrokeColor='currentColor'
            />
      
    )
}

export default Star