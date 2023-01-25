import Color from "./Color"
import { useState, useEffect } from "react"

export default function App() {
  const [colors, setColors] = useState(localStorage.getItem("colors") || [])

  function generateColorPalleter() {
    const newColors = colors.map(color =>
      color.isLocked
        ? { ...color, color: color.color }
        : { color: getNewColor(), isLocked: false }
    )
    setColors(newColors)
  }

  function getNewColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"]
    return new Array(6)
      .fill("")
      .map(ele => hex[Math.floor(Math.random() * hex.length)])
      .join("")
  }

  function handleClickColor(id) {
    const newColorPallete = [...colors]
    newColorPallete[id].isLocked = !newColorPallete[id].isLocked
    setColors(newColorPallete)
  }

  useEffect(() => {
    setColors(
      new Array(6)
        .fill("")
        .map(color => ({ color: getNewColor(), isLocked: false }))
    )
  }, [])

  useEffect(() => {
    localStorage.setItem(colors, colors)
  }, [colors])

  return (
    <>
      <h1 className='primary-heading'>Color Picker</h1>
      <button onClick={generateColorPalleter} className='button'>
        Generate
      </button>
      <div className='all-colors'>
        {colors.map((color, idx) => (
          <Color
            key={idx}
            idx={idx}
            color={color.color}
            handleClickColor={handleClickColor}
            isLocked={color.isLocked}
          />
        ))}
      </div>
    </>
  )
}
