import React from "react"
import { Layout, Spacer } from "../components/meta"
//import Seo from "../components/seo"

const FourOhFour = () => {

  return (
  <div className="bg-dblue">
   <Layout seo={{title:"404", desc:""}} navBlack={false}>
        {/*<Seo seo={homepage.attributes.seo} />*/}

        <div className="full-width fourohfour">
            <h1>4</h1>
            <div className="circ">
                <svg width="311" height="311" viewBox="0 0 311 311" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="155.5" cy="155.5" r="155.5" fill="#E26E4B"/>
                </svg>
            </div>
            <h1>4</h1>
            <h4 className="h4p">Page not found.</h4>
            <a href="/" className="arrow-link" >Return home</a>

            <Spacer h="100px" />
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

export default FourOhFour
