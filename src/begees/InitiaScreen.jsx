import React from "react"
import mainLogo from "../assests/imitaz-main-logo.svg"
import cityName from "../assests/gijrat.png"
import wheelImg from "../assests/WholeWheel.png"
import playwin from "../assests/playwin.png"

function InitiaScreen(props) {
  return (
    <>
      <img className='main-logo' src={mainLogo} alt='' />
      <div className='cityName-Wheel'>
        <div className='onlywheel'>
          <img className='rotateWheel' src={wheelImg} alt='' />
        </div>
        <img className='city' src={cityName} alt='' />
        <img className='playwin' src={playwin} alt='' />
      </div>
    </>
  )
}

export default InitiaScreen
