import React from "react"

export const ThreeImg = ( info ) => {
  return (
    <div className="three-img">
        <img src={info.img1} />
        <img src={info.img2} />
        <img src={info.img3} />
    </div>
  )
}

