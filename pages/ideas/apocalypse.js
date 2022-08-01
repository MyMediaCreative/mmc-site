import React from "react"
import { Layout, Divider, Spacer } from "../../components/meta"

import Placeholder from "../../assets/imgs/blog-placeholder.png"

const Post = () => {
        let tristan = {
                image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_100//v1645637892/about/Tristan_mlgotz.png",
                name: "Tristan"
        };
        let post = {
                name: "Tone and voice documents are paving the way to the robot apocalypse.",
                excerpt: "Without sci-fi, the world ends.",
                author: tristan,
                seo: {
                    title: "Tone and voice documents are paving the way to the robot apocalypse.",
                    desc: "Without sci-fi, the world ends."
                },
                content: <>
<p>Without sci-fi, the world ends.<br/><br/>
As with any good sci-fi loving pseudo-futurist, I love me some Philip K. Dick. His stuff is easy to digest, extremely fascinating, and just intellectual enough to justify reading it very outwardly at a Mile-End caf&eacute;. What I love about Dick&rsquo;s novel&rsquo;s is the sheer ability to build magnificently bleak worlds.<br/><br/>
The futures and alternative timelines described in his books take things that I already hate about the architecture, commerce, and human interaction &mdash; and take them to the enth degree.<br/><br/>
In Do Androids Dream of Electric Sheep, decaying attempts at urban grandeur trap humans and AI alike into a dark, grimy, arena for ruthless selling. There is still hustle and bustle &mdash; but there is no light or humanity in it. Like an illicit, desperate, version of Black Friday playing out on every corner of every street in a world where it&rsquo;s always night time.<br/><br/>
The sheer coldness of these worlds is, to me, an important moral statement. They evoke an emotion + tone that people can connect to, understand, and stay damn clear from.<br/><br/>
Whether it&rsquo;s 1984, Oryx and Crake, or Androids &mdash; sci-fi does something for human beings that politics, academia, and philosophy kind of can&rsquo;t. It helps people connect, on sensory and emotional level, to a future they want to avoid.<br/><br/>
The only way I can think of describing it is through the voice of someone yelling to another person across an open field:<br/><br/>
&ldquo;Hey! You see that over there &mdash; in the distance ahead of you? Yeah. Looks like shit &lsquo;eh? Yeah let&rsquo;s NOT go there. Oh ok, you&rsquo;re cool with us NOT going there? Great. Which direction do you want to go then? Left or Right?&rdquo;<br/><br/>
This helps us put on our apocalypse blinkers.</p>

<p>
@nagafujiriku on IG.<br/><br/>
Branding: apocalypse blinders.<br/><br/>
Ok, so now I&rsquo;ll have you look again at the image that I included as the header image. This is clearly an homage to that Ridley Scott-esque dystopia I described &mdash; but with the logos of today&rsquo;s tech leaders grafted onto the side of evil-villain-lairs.<br/><br/>
Something about this just doesnt&#8230;land. These logos are f*cking delightful. Rainbows! Reds! Blues! Huzzah!<br/><br/>
Earlier this year I noticed that big companies like Amazon, Google, and Facebook were running real brand campaigns in a way I&rsquo;d never seen before. I was getting automated ads that just generally promoted their brilliant technical innovations (or contributions to small business owners).<br/><br/>
Against the backdrop of a unionization fight in Alabama &mdash; I was being served the Amazon smiley-face logo 15 times a day. There was a bit of dissonance, not gonna lie.<br/><br/>
I think these brand campaigns are a bit more nefarious than innocuous.<br/><br/>
You see, I&rsquo;m a bit thrown off by some of the veritably apocalyptic things that major tech companies get up to in this day and age. They are experts in manipulation, surveillance, and the profit > people framework.<br/><br/>
Their desire to know us and change us in order to better sell to us is not something I&rsquo;m super keen on.<br/><br/>
And though the Facebook releases, the Social Dilemma, increased scrutiny against Amazon, and a general rise in data-literacy among my peers are good &mdash; these organizations seem to remain the most trusted in the world.<br/><br/>
Why is that?<br/><br/>
The Tone and Voice Document.<br/><br/>
I&rsquo;ve written many tone and voice documents as a brand strategist &mdash; and they&rsquo;re a bit glossy to say the least. The idea is to isolate and extract the most differentiating and lovable elements of a company &mdash; and use them to Frankenstein together a absolutely delightful corporate humanoid.<br/><br/>
These brands will never trigger our apocalypse-blinkers. They&rsquo;ll be too wrapped up in smiley faces, and Voice Values like trustworthy and human.<br/><br/>
So it&rsquo;s time that we, as a collective, develop some real media literacy here. We need to develop an explicitly critical posture in relation to these brands as they become more powerful (and delightful).<br/><br/>
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
