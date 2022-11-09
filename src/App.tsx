import React, { useState, useEffect } from 'react'
import './App.css'

export function App() {
  const [hue, setHue] = useState<string>()
  const [saturation, setSaturation] = useState<string>()
  const [lightness, setLightness] = useState<string>()

  function colorGenerator() {
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
  }

  function randomColorGenerator() {
    setHue(Math.floor(Math.random() * 360).toString())
    setSaturation(Math.floor(Math.random() * 100).toString())
    setLightness(Math.floor(Math.random() * 100).toString())
  }

  useEffect(() => {
    document.body.style.backgroundColor = colorGenerator()
  }, [hue, saturation, lightness])

  useEffect(() => {
    randomColorGenerator()
  }, [])

  return (
    <div>
      <div className="picker">
        <h1>Color Picker</h1>
        <h2>{colorGenerator()}</h2>
        <div className="slider">
          <input
            value={hue}
            onChange={(event) => setHue(event.target.value)}
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
            <h3>{hue}</h3>
          </label>
        </div>
        <div className="slider">
          <input
            value={saturation}
            onChange={(event) => setSaturation(event.target.value)}
            type="range"
            id="saturation"
            name="saturation"
            min="0"
            max="100"
            step="1"
          />
          <label className="slider-labels" htmlFor="saturation">
            <h2> Saturation</h2>
            <h3>{saturation}%</h3>
          </label>
        </div>
        <div className="slider">
          <input
            value={lightness}
            onChange={(event) => setLightness(event.target.value)}
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
            <h3>{lightness}%</h3>
          </label>
        </div>

        <button onClick={randomColorGenerator}>Random Color</button>
      </div>
    </div>
  )
}
