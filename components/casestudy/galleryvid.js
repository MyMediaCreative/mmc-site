import React from "react"

export const GalleryVid = ( info ) => {
  return (
        <video width="100%" autoPlay={true} muted playsInline >
            <source src={info.src} type="video/mp4" />
        </video>
  )
}

