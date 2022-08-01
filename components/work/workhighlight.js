import React from "react"
import Link from "next/link"

const WorkHighlight = ({ proj }) => {
  const url = "/work" + proj.path;
  const blurb = proj.portfolio.blurb + " <em style='color: var(--dorange)'>" + proj.name + ".</em>";
  return (
      <div className="highlight-card">
          <a href={url}>
          <div><img src={proj.portfolio.thumb} /></div>
          </a>
          <div>
            <h5 dangerouslySetInnerHTML={{__html: blurb }} />
            <a href={url} className="arrow-link"><em>View project</em></a>
          </div>
      </div>
  )
}

export default WorkHighlight
