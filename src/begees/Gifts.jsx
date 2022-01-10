import React from "react"
import gift from "../assests/giftbox.png"

function Gifts(props) {
  return (
    <div className='giftBG'>
      <img className='gift giftone' src={gift} alt='' />
      <img className='gift gifttwo' src={gift} alt='' />
      <img className='gift giftthree' src={gift} alt='' />
      <img className='gift giftfour' src={gift} alt='' />
      <img className='gift giftfive' src={gift} alt='' />
      <img className='gift giftsix' src={gift} alt='' />
    </div>
  )
}

export default Gifts
