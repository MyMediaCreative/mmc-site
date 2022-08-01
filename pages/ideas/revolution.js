import React from "react"
import { Layout, Divider, Spacer } from "../../components/meta"

import Placeholder from "../../assets/imgs/blog-placeholder.png"

const Post = () => {
        let tristan = {
                image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_100//v1645637892/about/Tristan_mlgotz.png",
                name: "Tristan"
        };
        let post = {
                name: "Buying the world a revolution.",
                excerpt: "Two years ago I wrote a film called Loving Offline.",
                author: tristan,
                seo: {
                    title: "Buying the world a revolution.",
                    desc: "Two years ago I wrote a film called &ldquo;Loving Offline&rdquo;."
                },
                content: <>
                            <p>Two years ago I wrote a film called &ldquo;Loving Offline&rdquo;. It was about a bad-ass revolutionary radio host and a down to earth musician waking the sheeple up from corporate control.<br/><br/>
                            It was the year I got really into Phillip K Dick and media theory.<br/><br/>
                            It was also the year that I decided to become an advertiser.<br/><br/>
                            But wait! How do you go from revolutionary radio waking up the sheeple to being an advertiser? Isn&rsquo;t the role of the advertiser to build a world of narcoleptics on behalf of the corporations?<br/><br/>
                            Well dude you&rsquo;ve been right for about a century now.<br/><br/>
                            For the last 100 years or so advertising has been the key tool by which the corporate world influences the flow of anything anywhere.<br/><br/>
                            Advertising is the reason you&rsquo;re out $2 but you have a can of coke instead.<br/><br/>
                            Advertising is also the reason that I could utter that phrase in 197 countries and most anyone would know what I&rsquo;m talking about.<br/><br/>
                            Advertising is Apple becoming a $2 trillion company and Donald Trump being elected president.<br/><br/>
                            Oddly enough fucking advertising is the creative language most responsible for the materials conditions of today.<br/><br/>
                            Not Bob Dylan or Jean-Michel Basquiat &mdash; fucking Coca Cola.<br/><br/>
                            F**K purists.<br/><br/>
                            So I went into advertising. I abandoned by revolutionary radio underdog story about overcoming corporate control and became a marketer.<br/><br/>
                            My thesis is simple:<br/><br/>
                            If advertising is the creative language most responsible for shaping the material conditions of today, then it is likely the most capable of reshaping them.<br/><br/>
                            Despite my better instincts, my embrace of this thesis has come with a rejection of the intellectually and conceptually stimulating creative languages of my past.<br/><br/>
                            No more do I claim, with glee, that Ingmar Bergman&rsquo;s &ldquo;Persona&rdquo; is my favourite film of all time (unless I&rsquo;m doing so strategically to ingratiate myself with the high-brow of society).<br/><br/>
                            Instead, I&rsquo;m doing something much more pretentious and self-aggrandizing:<br/><br/>
                            I&rsquo;m trying to change the world &mdash; through advertising.<br/><br/>
                            It feels hard to attain&#8230;<br/><br/>
                            Then I think about the mundanity of things like Heinz Ketchup and Coca-Cola. That is some seriously uninspired source material.<br/><br/>
                            But when your source materials are cries for justice, battles for habitability, and care for those un-cared for &mdash; you&rsquo;re working with a lot. With that as our base, we can get far.<br/><br/>
                            If Coca-Cola can buy the world a Coke &mdash; I think we can buy the world a revolution.<br/><br/>
                            </p>
                        </>
        };

  return (
      <Layout seo={post.seo} navBlack={true} navActive="ideas">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <div className="blog-content">
            <a href="/ideas" className="back-arrow-link">Ideas</a>
            <Spacer h="16px" />
            <h3>{post.name}</h3>
            <Spacer h="16px" />
            <div className="blog-author">
                <div><img src={tristan.image} /></div>
                <h6>{post.author.name}</h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6>January 2022</h6>
            </div>
            <Spacer h="50px" />

            <img src="https://res.cloudinary.com/mymediacreative/image/upload/v1645693934/blog-placeholder_csxpbc.png" />
            <Spacer h="30px" />

            <div className="blog-text">
                    {post.content}
            </div>
            <Spacer h="60px" />
        </div>
    </Layout>
  )
}

export default Post
