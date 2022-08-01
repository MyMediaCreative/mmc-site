import React from "react"

import { Layout, Spacer } from "../../components/meta"
import IdeasCard from "../../components/ideas-card"

const Ideas = () => {

  let tristan = { image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_100//v1645637892/about/Tristan_mlgotz.png",
                  name: "Tristan"};
  let mobilize = { name: "How to mobilize young people for social good.",
                   excerpt: <>Is the old approach to online fundraising for the charitable and nonprofit sector failing? <br/><br/>How many young people (under 30) are on your mailing list? <br/><br/>For years the charitable and nonprofit sector have been relying on a deft mix of content, campaign, and email marketing to raise money.</>,
                   link: "mobilize",
                   author: tristan };
  let love = { name: "Making meaningful things with people you love.",
               excerpt: "When I was a kid I spent most of my time playing imaginary games.",
               link: "love",
               author: tristan };
    let apocalypse = {
        name: "Tone and voice documents are paving the way to the robot apocalypse.",
        excerpt: "Without sci-fi, the world ends.",
        link: "apocalypse",
        author: tristan };
    let addiction = {
        name: "Beating my addiction taught me brand strategy.",
        excerpt: "When I was 15 I smoked my first cigarette. I was outside the local convenience store, surrounded by like-minded peers...",
        link: "addiction",
        author: tristan };
    let revolution = {
        name: "Buying the world a revolution.",
        excerpt: "Two years ago I wrote a film called Loving Offline.",
        link: "revolution",
        author: tristan };

  return (
  <div className="bg-dblue">
   <Layout seo={{title:"Ideas", desc:""}} navBlack={false} navActive="ideas">
        {/*<Seo seo={homepage.attributes.seo} />*/}

       <div className="ideas-head">
           <div>
             <h1 className="xl">Our <em className="dorange">Ideas</em></h1>
           </div>

            <svg width="100%" height="100%" viewBox="0 0 321 331" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="279.5" cy="124.5" r="41.5" fill="#E26E4B"/>
                <ellipse cx="84" cy="83" rx="84" ry="83" fill="#E26E4B"/>
                <circle cx="186.5" cy="268.5" r="62.5" fill="#E26E4B"/>
            </svg>

        </div>

        <Spacer h="50px" />

       <div className="full-width ideas-grid">
            <div className="ideas-card ideas-highlight">
                <a href={"/ideas/" + mobilize.link} className="orng-overlay">
                </a>
                <a href={"/ideas/" + mobilize.link} className="img-overlay">
                </a>
                <a href={"/ideas/" + mobilize.link}>
                <div>
                    <h3>{mobilize.name}</h3>
                    <p>{mobilize.excerpt}</p>
                </div>
                <div className="ideas-card-author">
                    <div><img src={tristan.image} /></div>
                    <h4>Tristan</h4>
                </div>
                </a>
            </div>
           <IdeasCard post={love} />
           <IdeasCard post={apocalypse} />
           <IdeasCard post={addiction} />
           <IdeasCard post={revolution} />
       </div>

       <Spacer h="100px" />

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

export default Ideas
