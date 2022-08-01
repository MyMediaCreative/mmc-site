import React from "react"

export const LRvid = ( info ) => {
  return (
      <div className="case-study-LR-card">
        <div>
            <video width="100%" autoPlay={true} loop playsInline muted >
                <source src={info.src} type="video/mp4" />
            </video>
        </div>
        <div>
            <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill={info.color}/>
            </svg>
            <h3 className="h3s">{info.title}</h3>
            <h6>{info.blurb}</h6>
        </div>
      </div>
  )
}
