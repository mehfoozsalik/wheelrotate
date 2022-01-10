import React from "react"
import mainLogo from "../assests/imitaz-main-logo.svg"
import congrate from "../assests/onwin/congratulations.png"
import giftprice from "../assests/wheelassest/freeGift.png"
import fivethous from "../assests/onwin/fivethous.png"
import onlythous from "../assests/onwin/onlythous.png"
import threethous from "../assests/onwin/threethous.png"
import twoThous from "../assests/onwin/twoThous.png"
import noprice from "../assests/sad.gif"
import onwining from "../assests/onwin/onwining.png"

function ResultScreen(props) {
  React.useEffect(() => {
    if (props.winning === "hardLuck") {
      props.hard.play()
    } else {
      props.won.play()
    }
  }, [props.winning])
  let title
  if (props.winning === "freeGifts") {
    title = <img className='priceWin' src={giftprice} alt='' />
  } else if (props.winning === "fiveVouc") {
    title = <img className='priceWin' src={fivethous} alt='' />
  } else if (props.winning === "thousVouc") {
    title = <img className='priceWin' src={onlythous} alt='' />
  } else if (props.winning === "threeVouc") {
    title = <img className='priceWin' src={threethous} alt='' />
  } else if (props.winning === "TwoVouc") {
    title = <img className='priceWin' src={twoThous} alt='' />
  } else {
    title = (
      <>
        <h1 className='ashh'>HARD LUCK</h1>
        <img className='priceWin noprice' src={noprice} alt='' />{" "}
      </>
    )
  }

  return (
    <>
      <img className='result-logo' src={mainLogo} alt='' />
      <div className='ResultAnounce'>
        <img className='congra' src={congrate} alt='' />
        <img className='onwin' src={onwining} alt='' />
      </div>
      {title}
    </>
  )
}

export default ResultScreen
