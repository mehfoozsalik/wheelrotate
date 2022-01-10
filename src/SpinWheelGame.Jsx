import React from "react"
import Wheel from "./Wheel"
import store from "./assests/imtiazstore.png"
import "./App.css"
import Clouds from "./begees/Clouds"
import InitiaScreen from "./begees/InitiaScreen"
import Gifts from "./begees/Gifts"
import ResultScreen from "./begees/ResultScreen"

export default function SpinWheelGame() {
  const [screenOne, setScreenOne] = React.useState(true)
  const [screenTwo, setScreenTwo] = React.useState(false)
  const [screenThree, setScreenThree] = React.useState(false)
  const [winning, setWinning] = React.useState()
  const handleChanges = (title) => {
    setWinning(title)
    setScreenThree(true)
    setScreenTwo(false)
  }

  return (
    <div className='wrapper'>
      <div
        className={`${screenThree ? "whelBtn reset" : "whelBtnOff"}`}
        onClick={() => {
          setScreenOne(true)
          setScreenTwo(false)
          setScreenThree(false)
        }}></div>
      <Gifts />
      <Clouds />
      <div
        className={`${
          screenOne ? "FirstScreen" : "FirstScreen FirstScreenOff"
        }`}>
        <InitiaScreen />
      </div>
      <div
        className={`${screenTwo ? "PlayScreen" : "PlayScreen PlayScreenOff"}`}>
        <Wheel handleChanges={handleChanges} />
      </div>
      <div
        className={`${
          screenThree ? "ResultScreen" : "ResultScreen ResultScreenOff"
        }`}>
        <ResultScreen winning={winning} />
      </div>
      <div
        className={`${screenOne ? "whelBtn play" : "whelBtnOff"}`}
        onClick={() => {
          setScreenTwo(true)
          setScreenOne(false)
        }}></div>

      <div className='storeImage'>
        <img src={store} />
      </div>
    </div>
  )
}
