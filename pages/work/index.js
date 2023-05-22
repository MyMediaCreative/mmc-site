import React from "react"
import { Layout, Spacer } from "../../components/meta"
import content from './casestudies.json';
import seoAll from '../seo.json'

import WorkCard      from "../../components/work/workcard.js"
import WorkHighlight from "../../components/work/workhighlight.js"

export default function Work ({ }) {

  const seo = seoAll.work;

  // CHANGE THIS TO CHANGE THE NUMBER OF HIGHLIGHTED PROJECTS
  const numHighlights = 6;
  const highlights = Object.entries(content).slice(0,numHighlights).map(entry => entry[1]);
  const grid = Object.entries(content).slice(numHighlights).map(entry => entry[1]);

  const projs = {
    infaque: {
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1000/v1645638115/work/Infaque_v1_rdysby.png",
      link: "infaque",
      blurb: <><h5><em className="dorange">Infāque.</em></h5></>
    },
    psystem: {
      name: "Psystem",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645638142/work/grid/Psystem_Header_aiwhko.png",
      link: "psystem",
      tag: "Branding",
    },
    mcconnell: {
      name: "McConnell",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645638141/work/grid/McConnell_Header_qe5lva.png",
      link: "mcconnell",
      tag: "Video",
    },
    ECTHP: {
      name: "The Hunger Project",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/EthicalCoach_Header_ufw90l.png",
      link: "ECTHP",
      tag: "Graphic Design",
    },
    nofish: {
      name: "NoFish",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/NoFish_Header_umrpak.png",
      link: "nofish",
      tag: "Campaign Strategy",
    },
    pop: {
      name: "POP Montreal",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/POP_Header_qcj5gl.png",
      link: "pop",
      tag: "Video",
    },
    ippnwc: {
      name: "IPPNWC",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/IPPNWC_Header_fse62a.png",
      link: "ippnwc",
      tag: "Campaign Strategy",
    },
    indigirecruit: {
      name: "IndigIrecruit",
      img: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_700/v1645733960/work/grid/IndigIrecruit_Header_pnxibt.png",
      link: "indigirecruit",
      tag: "Brand",
    },
  }
  return (
    <Layout navBlack={true} seo={seo} navActive="work">
      <div className="work-head midline">
        <div className="midline-title">
            <svg className="circ" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="100" fill="#E26E4B"/>
            </svg>
            <h1>Our work is tied together with <em className="dorange">passion</em> and <em className="dorange">care.</em></h1>
        </div>
        <div className="midline-line"> </div>
        <div className="midline-subtitle">
          <h5>You put your heart into making your <br /> communities, and the world, better. <br /> You deserve to work with people who <br /> <span className="dorange"> do the same.</span></h5>
        </div>
      </div>

      <div className="work-highlight">
          <>{ highlights.map((proj, index) => { return <WorkHighlight key={index} proj={proj} /> })}</>
      </div>

      <div className="full-width">
        <div className="work-grid">
          <>{ grid.map((proj, index) => { return <WorkCard key={index} proj={proj} /> })}</>
        </div>
       <Spacer h="80px" />
      </div>
    </Layout>
  )
}
