import React from "react"
import Link from "next/link"

import Spacer from "./meta/spacer"

const IdeasCard = ({ post }) => {
  return (
    <div className="ideas-card">
        <a href={"/ideas/" + post.link} className="orng-overlay">
        </a>
        <a href={"/ideas/" + post.link} className="img-overlay">
        </a>
        <a href={"/ideas/" + post.link}>
          <h4>{post.name}</h4>
          <div className="ideas-card-author">
              <div><img src={post.author.image} /></div>
              <h6>{post.author.name}</h6>
          </div>
        </a>
    </div>
  )
}

export default IdeasCard
