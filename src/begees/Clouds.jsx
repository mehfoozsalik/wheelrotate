import React from "react"
import cloudOne from "../assests/cloud/cloudone.png"
import cloudTwo from "../assests/cloud/cloudtwo.png"
import cloudThree from "../assests/cloud/cloudthree.png"
import cloudFour from "../assests/cloud/cloudfour.png"
import cloudFive from "../assests/cloud/cloudfive.png"

function Clouds(props) {
  return (
    <div className='cloudBG'>
      <img className='cloud one' src={cloudOne} alt='' />
      <img className='cloud two' src={cloudThree} alt='' />
      <img className='cloud three' src={cloudFour} alt='' />
      <img className='cloud four' src={cloudTwo} alt='' />
      <img className='cloud five' src={cloudFive} alt='' />
    </div>
  )
}

export default Clouds
