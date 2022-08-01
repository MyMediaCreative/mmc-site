import React from "react"

export const TwoImg = ( info ) => {
  return (
    <div className="two-img">
        <img src={info.img1} />
        <img src={info.img2} />
    </div>
  )
}
