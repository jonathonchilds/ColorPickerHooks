import React from 'react'
import './App.css'

export function App() {
  return (
    <div>
      <div className="picker-styling">
        Color Picker
        <div>
          <input type="range" id="hue" name="hue" min="0" max="360" />
        </div>
        <div>
          <input
            type="range"
            id="saturation"
            name="saturation"
            min="0"
            max="100"
          />
        </div>
        <div>
          <input
            type="range"
            id="lightness"
            name="lightness"
            min="0"
            max="100"
          />
        </div>
      </div>
    </div>
  )
}
