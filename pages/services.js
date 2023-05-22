import React from "react"

import { Layout, Spacer } from "../components/meta"
import seoAll from './seo.json'

const Services = () => {
    const seo = seoAll.services;

  return (
  <div className="bg-dblue">
      <Layout seo={seo} navBlack={false} navActive="services">
        {/*<Seo seo={homepage.attributes.seo} />*/}

        <div className="services-head">
            <h1>Social change takes your <em className="dorange">head, heart,</em> and your <em className="dorange">hands.</em></h1>
            <div className="services-head-dot">
                <svg width="100%"  viewBox="0 0 230 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="166" cy="76" r="64" fill="#E26E4B"/>
                    <circle cx="38" cy="38" r="38" fill="#E26E4B"/>
                </svg>
            </div>
        </div>

       <div className="hdivider-blue" />

        <div className="services-box">
            <div>
                <div className="name">
                    <h4>Head</h4>
                </div>
                <div className="title">
                    <h3>Strategy</h3>
                </div>
                <div className="list">
                    <h6><ul>
                        <li>campaign</li>
                        <li>communications</li>
                        <li>social media</li>
                        <li>go-to-market</li>
                        <li>product</li>
                    </ul></h6>
                </div>
                <div className="vdivider-con"><div className="vdivider-blue"></div></div>
                <div className="desc">
                    <h4>To us, great strategy comes from the marriage of empathy, research, and analysis.</h4>
                    <h6>We’re a group of curious people who want to understand you, your reality, and your community before we jump into making things.</h6>
                </div>
                <div className="links">
                    <a href="/work/mada" className="arrow-link" >MADA</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="/work/propelimpact" className="arrow-link" >Propel Impact</a>
                </div>
            </div>
        </div>

       <div className="hdivider-blue" />

        <div className="services-box">
            <div>
                <div className="name">
                    <h4>Heart</h4>
                </div>
                <div className="title">
                    <h3>Storytelling</h3>
                </div>
                <div className="list">
                    <h6><ul>
                        <li>brands</li>
                        <li>campaigns</li>
                        <li>content</li>
                        <li>apps</li>
                        <li>websites</li>
                    </ul></h6>
                </div>
                <div className="vdivider-con"><div className="vdivider-blue"></div></div>
                <div className="desc">
                    <h4>Within a great strategic framework, a compelling story is what moves people to donate, volunteer, buy, or share. </h4>
                    <h6>We’re a group of storytellers at heart—who want to get at what makes you, and your purpose, special. Then tell your story in a way that activates.</h6>
                </div>
                <div className="links">
                    <a href="/work/greenpeace" className="arrow-link" >Greenpeace</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="/work/chasm" className="arrow-link" >CHASM</a>
                </div>
            </div>
        </div>

       <div className="hdivider-blue" />

        <div className="services-box">
            <div>
                <div className="name">
                    <h4>Hands</h4>
                </div>
                <div className="title">
                    <h3>Execution</h3>
                </div>
                <div className="list">
                    <h6><ul>
                        <li>video</li>
                        <li>motion design</li>
                        <li>graphic design</li>
                        <li>ux/ui design</li>
                        <li>web design</li>
                        <li>copywriting</li>
                    </ul></h6>
                </div>
                <div className="vdivider-con"><div className="vdivider-blue"></div></div>
                <div className="desc">
                    <h4>Whether you’re building an annual report, deploying your brand on social media, or making an animated explainer video—excellent execution is absolutely essential.</h4>
                    <h6>We’re a group of technically-minded creators who pay rigorous attention to detail when building things to be effective in a digital world. </h6>
                </div>
                <div className="links">
                    <a href="/work/ECTHP" className="arrow-link" >EthicalCoach</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="/work/cera" className="arrow-link" >CERA</a>
                </div>
            </div>
        </div>

       <div className="hdivider-blue" />

        <div className="services-dot">
            <div className="heading">
                <h1 className="xl">Want to build<br/> something<em className="dorange"> great?</em></h1>
                <Spacer h="20px" />
                <a href="/contact" className="arrow-link" >Reach Out</a>
            </div>
            <div className="dot"><svg width="275" height="275" viewBox="0 0 275 275" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="137.5" cy="137.5" r="137.5" fill="#E26E4B"/>
            </svg></div>
        </div>

    </Layout>
   </div>

  )
}

{/* export async function getStaticProps() {
  // Run API calls in parallel
  // const [articlesRes, homepageRes] = await Promise.all([
  //   fetchAPI("/articles", { populate: "*" }),
//  const [homepageRes] = await Promise.all([
//    fetchAPI("/homepage", {
//      populate: {
//        hero: "*",
//        seo: { populate: "*" },
//      },
//    }),
//  ])
//
//  return {
//    props: {
//      homepage: homepageRes.data,
//    },
//    revalidate: 1,
//  }
} */}

export default Services
