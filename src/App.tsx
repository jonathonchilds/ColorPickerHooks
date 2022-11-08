import React, { useState } from 'react'
import './App.css'

export function App() {
  const [hueValue, setHueValue] = useState<string>()
  //"event.target.value" wouldn't allow a number
  const [saturationValue, setSaturationValue] = useState<string>()
  //wanted to use same state for each input//
  const [lightnessValue, setLightnessValue] = useState<string>()

  function colorGenerator(hue: string, saturation: string, lightness: string) {
    const hueTransformed = +hue
    const saturationTransformed = +saturation
    const lightnessTransformed = +lightness

    const HSLValue =
      hueTransformed + saturationTransformed + lightnessTransformed

    console.log(HSLValue)
  }

  function sliderValues(value: string) {}

  return (
    <div>
      <div className="picker-container">
        <h1>Color Picker</h1>
        <div className="slider-container">
          <input
            value={hueValue}
            onChange={(event) => setHueValue(event.target.value)}
            //experimented with "this"//
            type="range"
            id="hue"
            name="hue"
            min="0"
            max="360"
            step="1"
          />
          <label className="slider-labels" htmlFor="hue">
            <h2>Hue</h2>
            <h3>{hueValue}</h3>
          </label>
        </div>
        <div className="slider-container">
          <input
            value={saturationValue}
            onChange={(event) => setSaturationValue(event.target.value)}
            type="range"
            id="saturation"
            name="saturation"
            min="0"
            max="100"
            step="1"
          />
          <label className="slider-labels" htmlFor="saturation">
            <h2> Saturation</h2>
            <h3>{saturationValue}%</h3>
          </label>
        </div>
        <div className="slider-container">
          <input
            value={lightnessValue}
            onChange={(event) => setLightnessValue(event.target.value)}
            type="range"
            id="lightness"
            name="lightness"
            min="0"
            max="100"
            step="1"
          />
          <label className="slider-labels" htmlFor="lightness">
            {' '}
            <h2>Lightness</h2>
            <h3>{lightnessValue}%</h3>
          </label>
        </div>
        <button>Random Color</button>
      </div>
    </div>
  )
}
