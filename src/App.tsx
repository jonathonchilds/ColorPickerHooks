import React, { useState } from 'react'
import './App.css'

export function App() {
  const [hueValue, setHueValue] = useState<string>()
  //wanted to use same state for each input//

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
            Hue
            <div>{hueValue}</div>
          </label>
        </div>
        <div className="slider-container">
          <input
            type="range"
            id="saturation"
            name="saturation"
            min="0"
            max="100"
            step="1"
          />
          <label className="slider-labels" htmlFor="saturation">
            Saturation
            <div></div>
          </label>
        </div>
        <div className="slider-container">
          <input
            type="range"
            id="lightness"
            name="lightness"
            min="0"
            max="100"
            step="1"
          />
          <label className="slider-labels" htmlFor="lightness">
            Lightness
            <div></div>
          </label>
        </div>
        <button>Random Color</button>
      </div>
    </div>
  )
}
