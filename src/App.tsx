import React, { useState } from 'react'
import './App.css'

export function App() {
  const [value, setValue] = useState(22)

  //function handleChange(e) {}
  return (
    <div>
      <div className="picker-container">
        <h1>Color Picker</h1>
        <div className="slider-container">
          <input
            onInput={() => setValue}
            type="range"
            id="hue"
            name="hue"
            min="0"
            max="360"
            step="1"
            //value={setValue}
          />
          <label className="slider-labels" htmlFor="hue">
            Hue
            <div>{value}</div>
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
          </label>
        </div>
        <button>Random Color</button>
      </div>
    </div>
  )
}
