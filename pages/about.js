import React from "react"
//import Seo from "../components/seo"
import { Layout, Spacer } from "../components/meta"
import seoAll from './seo.json'

import AboutCard from "../components/about-card"

const About = () => {

    const seo = seoAll.about;

    let tristan = { name: "Tristan", pronouns: "(he/him)", title: "Executive Director",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1646091920/about/Tristan_2_gvybas.png",
                    li: "https://www.linkedin.com/in/tristan-surman/",
                    desc: <>Tristan is in charge of helping the team get access to the strategies, tools and opportunities that drive the organization forward.<br/><br/> He loves making music, writing, and learning.</> };
    let ella    = { name: "Ella", pronouns: "(she/her)", title: "Co-Creative Director",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1646091923/about/Ella_2_rt93uu.png",
                    li: "https://www.linkedin.com/in/ella-roy-433948156/",
                    desc: <>Ella is in charge of guiding the creative vision of our work from concept to execution.<br/><br/> She loves film photography, her collection of design magazines and being around people!</> };
    let tony    = { name: "Tony", pronouns: "(he/him)", title: "Co-Creative Director",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1646091923/about/Tony_2_bxu33u.png",
                    li: "https://www.linkedin.com/in/tonywang99/",
                    desc: <>Tony leads our creative team and guides the stories that help our clients make the world a better place.<br/><br/>He loves horror films, long walks, and cool looking album covers.</> };
    let yunjie  = { name: "Yunjie", pronouns: "(she/her)", title: "Product Designer",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1646092416/about/Yunjie_2_fkedl4.png",
                    li: "https://www.linkedin.com/in/yunjiezhang/",
                    desc: <>Yunjie works with clients to create meaningful and delightful digital experiences.<br/><br/>She loves walking, thinking, learning, and pistachio ice cream.</> };
    let kai     = { name: "Kai", pronouns: "(she/her)", title: "Strategist",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1646091920/about/Kai_2_rxdkd7.png",
                    li: "https://www.linkedin.com/in/kai-trotz-motayne-260123162/",
                    desc: <>Kai focuses on the implementation of digital media campaign strategy by understanding client goals and determining actions through strategic thinking and planning.<br/><br/>Kai loves travelling, reading, and creating unfinished playlists.</>,  };
    let liam    = { name: "Liam", pronouns: "(he/him)", title: "Director of Web and Technology",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1646091922/about/Liam_2_iijz0q.png",
                    li: "https://www.linkedin.com/in/liam-chung-9121a4151/",
                    desc: <>Liam is responsible for bringing websites to life, using his technical knowhow, eye for detail, and a boatload of patience.<br/><br/>He loves math, music, and tinkering with computers.</>,  };
    let max     = { name: "Max", pronouns: "(he/him)", title: "Video Producer",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1645678527/about/Max_Brauch_ros9ah.jpg",
                    li: "https://www.linkedin.com/in/max-brauch-5b40b1210/",
                    desc: <>Max is in charge of working with the video team to bring clients' stories and ideas to life through beautiful video production.<br/><br/>He loves making art with friends, listening to music and writing.</>,  };
    let simrit  = { name: "Simrit", pronouns: "(she/her)", title: "Product Desiger",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1645678497/about/simrit_ss5rtg.png",
                    li: "https://www.linkedin.com/in/simrit-dhillon/",
                    desc: <>Simrit is a UX/UI designer, illustrator, and huge marvel fan. <br/><br/>She loves to watch movies, read books, listen to Khalid, and push pixels to perfection.</>};

  return (
      <Layout seo={{title:"About", desc:""}} navBlack={true} navActive="about">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <div className="about-head midline">
            <div className="midline-title">
            <h1>Making change <br /> should be <em className="dorange">exciting.</em></h1>
            <h4>If not, it can get exhausting.</h4>
            </div>
            <div className="midline-line"> </div>
            <div className="midline-subtitle">
                <h5>We create a space where <span style={{fontWeight:550}} className="dorange">passion and curiosity</span> run rampant. A space where you can do and share your best thinking. We want you to feel fully welcomed into the process—because your story is the engine for great creativity.</h5>
            </div>
            <div className="about-head-dot">
                <svg width="12vw" viewBox="0 0 235 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="117.5" cy="117.5" r="117.5" fill="#E26E4B"/>
                </svg>
            </div>

        </div>

        <div className="full-width about-video">
            <img
                src="https://res.cloudinary.com/mymediacreative/image/upload/v1645631610/vid-placeholder_i7qmmc.jpg"
                alt="the team on a snowy day" />
        </div>

        <Spacer h="100px" />

        <div className="about-head midline">
            <div className="midline-title">
                <svg className="circ" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="100" fill="#E26E4B"/>
                </svg>
                <h3>Great creative relationships are <br /> an investment<em className="dorange"> (worth making).</em></h3>
            </div>
            <div className="midline-line"> </div>
            <div className="midline-subtitle">
                <h5>When it comes to creative partnership… <br/>
                    we’re in it for the long haul. These are the  <br/>
                    people you’d be chatting with, working  <br/>
                    alongside, and trusting to <span style={{fontWeight:550}} className="dorange">drive results.</span></h5>
            </div>
        </div>


        <div className="about-grid">
            <AboutCard person={tristan}/>
            <AboutCard person={tony}/>
            <AboutCard person={ella}/>
            <AboutCard person={kai}/>
            <AboutCard person={yunjie}/>
            <AboutCard person={liam}/>
            <AboutCard person={max}/>
            <AboutCard person={simrit}/>
        </div>

        <Spacer h="50px" />

        <div className="hdivider-grey" />

        <div className="about-dots">
            <div>
                <h2>If this is the kind of collaboration that <em className="dorange">lights you up:</em></h2>
                <Spacer h="20px" />
                <a href="/contact" className="arrow-link"><em>Reach out</em></a>
            </div>
            <svg viewBox="0 0 294 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="221" cy="73" r="73" fill="#E26E4B"/>
                <circle cx="199.5" cy="259.5" r="62.5" fill="#E26E4B"/>
                <circle cx="36.5" cy="169.5" r="36.5" fill="#E26E4B"/>
            </svg>
        </div>

    </Layout>
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

export default About
