import React from "react"

export const HeaderVid = ( info ) => {
  return (
        <video className="reg" width="100%" autoPlay={true} muted loop playsInline >
            <source src={info.src} type="video/mp4" />
        </video>
  )
}

