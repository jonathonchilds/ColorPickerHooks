import React from 'react'
import './App.css'

export function App() {
  return (
    <div>
      <div className="picker-container">
        <h1>Color Picker</h1>
        <div>
          <input type="range" id="hue" name="hue" min="0" max="360" />
          <label htmlFor="hue">Hue</label>
        </div>
        <div>
          <input
            type="range"
            id="saturation"
            name="saturation"
            min="0"
            max="100"
          />
          <label htmlFor="saturation">Saturation</label>
        </div>
        <div>
          <input
            type="range"
            id="lightness"
            name="lightness"
            min="0"
            max="100"
          />
          <label htmlFor="lightness">Lightness</label>
        </div>
      </div>
    </div>
  )
}
