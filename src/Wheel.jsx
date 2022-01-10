import React from "react"
import { LuckyWheel } from "@lucky-canvas/react"
import wheelBG from "./assests/wheelBG.png"
import freeGift from "./assests/wheelassest/freeGift.png"
import fiveVouc from "./assests/wheelassest/fiveVouc.png"
import hardLuck from "./assests/wheelassest/hardLuck.png"
import thousVouc from "./assests/wheelassest/thousVouc.png"
import threeVouc from "./assests/wheelassest/threeVouc.png"
import TwoVouc from "./assests/wheelassest/TwoVouc.png"

import indicator from "./assests/indicator.png"

import "./App.css"

export default class Wheel extends React.Component {
  constructor(props) {
    super(props)
    this.myLucky = React.createRef()
    this.state = {
      blocks: [
        {
          padding: "35px",
          imgs: [{ src: `${wheelBG}`, width: "100%", top: "0%" }],
        },
      ],
      prizes: [
        {
          title: "freeGifts",
          background: "#39a1e8",
          imgs: [{ src: `${freeGift}`, width: "45%", top: "25%" }],
        },
        {
          title: "fiveVouc",
          background: "#fba629",

          imgs: [{ src: `${fiveVouc}`, width: "45%", top: "10%" }],
        },
        {
          title: "hardLuck",
          background: "#fbf1ca",

          imgs: [{ src: `${hardLuck}`, width: "45%", top: "25%" }],
        },
        {
          title: "thousVouc",
          background: "#00f0ff",

          imgs: [{ src: `${thousVouc}`, width: "45%", top: "10%" }],
        },
        {
          title: "threeVouc",
          background: "#07e446",

          imgs: [{ src: `${threeVouc}`, width: "45%", top: "10%" }],
        },
        {
          title: "TwoVouc",
          background: "#14469c",

          imgs: [{ src: `${TwoVouc}`, width: "45%", top: "10%" }],
        },
      ],
      buttons: [
        {
          radius: "40px",
          imgs: [
            {
              src: `${indicator}`,
              shadow: " 6 20 #2D1F01",
              width: "100%",
              top: "-60",
            },
          ],
        },
      ],
      defaultStyle: {
        animation: "ease-out",
      },
    }
  }
  render() {
    return (
      <>
        <div className='wheel'>
          <LuckyWheel
            ref={this.myLucky}
            width='40rem'
            height='40rem'
            blocks={this.state.blocks}
            prizes={this.state.prizes}
            buttons={this.state.buttons}
            defaultStyle={this.state.defaultStyle}
            onEnd={(prize) => {
              this.props.handleChanges(prize.title)
            }}></LuckyWheel>
        </div>
        <div
          className='whelBtn spin'
          onClick={() => {
            this.props.TapSound.play()
            this.props.spin.play()

            this.props.spin.volume(0)
            this.myLucky.current.play()
            setTimeout(() => {
              this.props.spin.volume(1)
              this.props.spin.rate(1.2)
            }, 2000)
            setTimeout(() => {
              this.props.spin.rate(1.4)
            }, 6000)
            setTimeout(() => {
              const index = (Math.random() * 6) >> 0
              this.myLucky.current.stop(index)
            }, 5650)
          }}></div>
      </>
    )
  }
}
