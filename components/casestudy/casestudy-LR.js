import React from "react"
import ReactPlayer from 'react-player'

export const LR = ({ color, LR }) => {
  return (
      <div className="case-study-LR-card">
        <div>
          { LR.type == "image" &&
            <img src={LR.media} />
          }

          { LR.type == "vimeo" &&
            <div className="LR-player-con">
              <ReactPlayer
                  url={LR.media}
                  controls={true}
                  width="100%"
                  height="100%"
              />
            </div>
          }

          { LR.type == "loop" &&
          <video width="100%" autoPlay={true} loop playsInline muted >
              <source src={LR.media} type="video/mp4" />
          </video>
          }

        </div>

        <div>
            <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill={color}/>
            </svg>
            <h3 className="h3s">{LR.title}</h3>
            <h6 dangerouslySetInnerHTML={{__html: LR.blurb}}></h6>
        </div>
      </div>
  )
}

