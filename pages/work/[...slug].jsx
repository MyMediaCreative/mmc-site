import React from "react"
import content from './casestudies.json';
import { Layout, Nav, Footer, Spacer, Seo } from "../../components/meta"
import WorkCard from "../../components/work/workcard"
import dynamic from "next/dynamic"
const ReactPlayer = dynamic(() => import("react-player"), {ssr: false});
import { Intro, Challenge, Approach, Execution, Outcome,
         LR, LRvid, LRplayer,
         DotStrip,
         HeaderVid, HeaderImg, GalleryVid, GalleryPlayer,
         TwoImg, ThreeImg
       } from "../../components/casestudy"


export default function Page( c ) {

    const cs = c.page;
    if(typeof(cs) == 'undefined') return ( <> <p> ERROR </p> </> )
    else return (
    <>
        <div className="case-study-content">
            <div className="case-study-head" style={{ backgroundImage: `url(${cs.header.mobile})`, backgroundPosition: `${cs.header.mobilePos}`}}>
                <Nav isBlack={cs.isBlack} seo={cs.seo} active="work"/>
                { cs.header.type == "image" &&
                    <HeaderImg src={cs.header.media} />
                }
                { cs.header.type == "video" &&
                    <HeaderVid src={cs.header.media} />
                }
            </div>

            <div className="case-study-intro reg-w">
                <div>
                    <h4 className="h4p" style={{color: cs.color1, fontStyle: "italic"}}>{cs.name}</h4>
                    <h3 className="h3s" dangerouslySetInnerHTML={{__html: cs.title}}></h3>
                </div>

                <div className="case-study-tags">
                    <p style={{fontWeight: 500, color: cs.color1}}>Focus</p>
                    <ul>
                      <>{ cs.foci.map((focus, index) => { return <li key={index}>{focus}</li>; })}</>
                    </ul>
                    <Spacer h="10px" />

                    <p style={{fontWeight: 500, color: cs.color1}}>Year</p>
                    <ul><li> {cs.year} </li></ul>
                    <Spacer h="10px" />

                    <p style={{fontWeight: 500, color: cs.color1}}>Disciplines</p>
                    <ul><>{ cs.disciplines.map((disc, index) => { return <li key={index}>{disc}</li>; })}</></ul>
                </div>

                <Intro text={cs.numContent.intro} color={cs.color1} />
            </div>

            <div className="full-width">
                { cs.mainMedia.type == "image" &&
                    <img src={cs.mainMedia.media} />
                }
                { cs.mainMedia.type == "vimeo" &&
                <div className="case-study-vimeo">
                  <ReactPlayer url={cs.mainMedia.media} controls={true} width="" height="" />
                </div>
                }
                { cs.mainMedia.type == "loop" &&
                  <video width="100%" autoPlay={true} loop playsInline muted style={{ margin: "10px 0" }} ><source src={cs.mainMedia.media} type="video/mp4" /></video>
                }
            </div>

            { cs.numContent.challenge != "" &&
            <Challenge text={cs.numContent.challenge} color={cs.color1} />
            }
            { cs.numContent.dotstrip != "" &&
            <DotStrip text={cs.numContent.dotstrip} color={cs.color2} />
            }
            { cs.numContent.approach != "" &&
            <Approach text={cs.numContent.approach} color={cs.color1} />
            }

            <div className="full-width">
                <>{ cs.gallery.map((gal, index) => {
                    return gallery(gal);
                })}</>
            </div>

                { cs.numContent.execution != "" &&
            <Execution text={cs.numContent.execution} color={cs.color1} />
                }

            <div className="case-study-LR">
                <>{ cs.LR.map((lr, index) => { return <LR key={index} color={cs.color1} LR={lr} /> })}</>
            </div>

            { cs.numContent.outcome != "" &&
            <Outcome text={cs.numContent.outcome} color={cs.color1} />
            }
            <Spacer h="50px" />

            <div className="full-width">
                <>{ cs.gallery2.map((gal, index) => {
                    return gallery(gal);
                })}</>
            </div>

            <Spacer h="80px" />

        </div>
    <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const paths = Object.entries(content).map(entry => entry[1]).map(page => {
    const slug = page.path.split('/').slice(1);
    return {params: {slug}};
  });
  return {paths, fallback: true};
}

export async function getStaticProps({params}) {
  const currentPath = `/${params.slug.join('/')}`;
  const page = Object.entries(content).map(entry => entry[1]).find(page => page.path === currentPath) || {notfound: true};
  return {props: {page}};
}

const gallery = (g) => {
    if(g.type == "image") return <img src={g.media} />
    if(g.type == "loop") return <video width="100%" autoPlay={true} loop playsInline muted style={{ margin: "10px 0" }} ><source src={g.media} type="video/mp4" /></video>
    if(g.type == "vimeo") return <ReactPlayer url={g.media} controls={true} width="" height="" />
    if(g.type == "twoImg") return <div className="two-img">{ gallery(g.media[0]) }{ gallery(g.media[1]) }</div>
    if(g.type == "threeImg") return <div className="three-img">{ gallery(g.media[0]) }{ gallery(g.media[1]) }{ gallery(g.media[2]) }</div>
}
