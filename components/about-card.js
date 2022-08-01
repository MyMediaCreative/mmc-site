import React from "react"
import Link from "next/link"

const AboutCard = ({ person }) => {
  return (
    <div className="about-card">
        <div className="about-img">
            <img src={person.image} />
            <div className="about-desc">
                <p>{person.desc}</p>
            </div>
            <div className="LI"><div>
             <a href={person.li} target="_blank"><img src="https://res.cloudinary.com/mymediacreative/image/upload/v1645747763/home/LI_xdwy9v.svg" /></a>
            </div></div>
        </div>
        <h5><span>{person.name}</span> {person.pronouns}</h5>
        <h6><em>{person.title}</em></h6>
    </div>
  )
}

export default AboutCard
