import React from "react"
import Link from "next/link"

const WorkCard = ({ proj }) => {
  return (
      <div className="work-card"style={{ backgroundImage: `url(${proj.portfolio.thumb})`}}>
        <div className="work-card-grad" />
          <h4>{proj.name}</h4>
          <h6>{proj.portfolio.blurb}</h6>
          <a href={"/work" + proj.path} className="work-card-link" />
      </div>
  )
}

export default WorkCard
