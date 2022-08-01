import React from "react"
import ReactPlayer from 'react-player'

export const GalleryPlayer = ( info ) => {
  return (
        <ReactPlayer
            url={info.src}
            controls={true}
            width="94vw"
            height="53vw"
        />
  )
}
