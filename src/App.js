import React from "react"
import { Howl, Howler } from "howler"
import Wheel from "./Wheel"
import store from "./assests/imtiazstore.png"
import "./App.css"
import Clouds from "./begees/Clouds"
import InitiaScreen from "./begees/InitiaScreen"
import Gifts from "./begees/Gifts"
import ResultScreen from "./begees/ResultScreen"
import bgmusic from "./assests/Audio/bgMusic.mp3"
import butonTap from "./assests/Audio/butonTap.wav"
import hardLuck from "./assests/Audio/hardLuck.wav"
import spinning from "./assests/Audio/spinning.mp3"
import wonMoney from "./assests/Audio/wonMoney.wav"

export default function App() {
  const won = new Howl({
    src: [wonMoney],
    volume: 1,
  })
  const hard = new Howl({
    src: [hardLuck],
    volume: 1,
  })
  const spin = new Howl({
    src: [spinning],
    volume: 1,
  })
  console.log(spin)
  const TapSound = new Howl({
    src: [butonTap],
    volume: 1,
  })
  const bgMusic = new Howl({
    src: [bgmusic],
    autoplay: true,
    loop: true,
    volume: 0.04,
  })

  const [screenOne, setScreenOne] = React.useState(true)
  const [screenTwo, setScreenTwo] = React.useState(false)
  const [screenThree, setScreenThree] = React.useState(false)
  const [winning, setWinning] = React.useState()
  const handleChanges = (title) => {
    setWinning(title)
    setScreenThree(true)
    setScreenTwo(false)
  }
  React.useEffect(() => {
    bgMusic.play()
  }, [])
  return (
    <div className='wrapper'>
      <div
        className={`${screenThree ? "whelBtn reset" : "whelBtnOff"}`}
        onClick={() => {
          setScreenOne(true)
          setScreenTwo(false)
          setScreenThree(false)
          TapSound.play()
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
        <Wheel handleChanges={handleChanges} TapSound={TapSound} spin={spin} />
      </div>
      <div
        className={`${
          screenThree ? "ResultScreen" : "ResultScreen ResultScreenOff"
        }`}>
        <ResultScreen winning={winning} won={won} hard={hard} />
      </div>
      <div
        className={`${screenOne ? "whelBtn play" : "whelBtnOff"}`}
        onClick={() => {
          setScreenTwo(true)
          setScreenOne(false)
          TapSound.play()
        }}></div>

      <div className='storeImage'>
        <img src={store} />
      </div>
    </div>
  )
}
