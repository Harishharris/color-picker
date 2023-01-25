export default function Color({ color, handleClickColor, idx, isLocked }) {
  return (
    <div
      className='color-column'
      style={{ backgroundColor: "#" + color, borderRadius: "20px" }}
      onClick={() => handleClickColor(idx)}>
      {"#" + color}
      {isLocked && (
        <div
          style={{
            position: "relative",
            bottom: "15rem",
            left: "1.5rem",
            color: "#000",
            fontSize: "2rem",
          }}>
          .
        </div>
      )}
    </div>
  )
}
