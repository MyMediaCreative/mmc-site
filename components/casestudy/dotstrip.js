import React from "react"

export const DotStrip = ( info ) => {
  return (
    <div className="case-study-dot-strip" style={{backgroundColor: info.color}}>
        <div className="reg-w">
            <svg width="13%"  viewBox="0 0 200 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="120" cy="140" r="65.2428" fill="white"/>
                <circle cx="35" cy="30" r="30" fill="white"/>
            </svg>
            <h2 dangerouslySetInnerHTML={{__html: info.text}}></h2>
        </div>
    </div>
  )
}

