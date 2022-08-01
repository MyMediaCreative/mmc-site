import React from "react"
import { Layout, Divider, Spacer } from "../../components/meta"

import Placeholder from "../../assets/imgs/blog-placeholder.png"

const Post = () => {
        let tristan = {
                image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_100//v1645637892/about/Tristan_mlgotz.png",
                name: "Tristan"
        };
        let post = {
                name: "Beating my addiction taught me brand strategy.",
                excerpt: "When I was 15 I smoked my first cigarette. I was outside the local convenience store, surrounded by like-minded peers...",
                author: tristan,
                seo: {
                    title: "Beating my addiction taught me brand strategy",
                    desc: "When I was 15 I smoked my first cigarette. I was outside the local convenience store, surrounded by like-minded peers..."
                },
                content: <>
<p>When I was 15 I smoked my first cigarette. I was outside the local convenience store, surrounded by like-minded peers. Within 5 minutes I was one wrong move away from vomiting all over the vinyl and linoleum flooring that my high school janitor had just recently buffed. I was queezy and light-headed. It was horrible.<br/><br/>
I thought to myself: &ldquo;Why would anybody smoke cigarettes&rdquo;.<br/><br/>
Cut to&#8230;<br/><br/>
Two years later I was chain-smoking Canada&rsquo;s Marlboro Red knock offs at picnic bench after band practice. It was objectively disgusting, but subjectively very cool. I was going through 2 packs a week. I was hooked.<br/><br/>
But then&#8230;<br/><br/>
I started struggling at band practice. I was straining my voice on notes that had been seamless just a couple months prior. I sounded like a 12 year old Tom Waits (I was 18, mind you). We had just released our first record and we were ready to go in for a second one. I realized something:<br/><br/>
If I wanted to make this record great, I had to stop smoking.<br/><br/>
So I quit cold turkey. I had a horrible cough for the following three months &mdash; but it wasn&rsquo;t the end of the world.<br/><br/>
I haven&rsquo;t gone back to cigarettes since.<br/><br/>
I beat my cigarette addiction because I had a why.<br/><br/>
I had a clear and vital vision for the future, which kept me committed through tough moments of craving.<br/><br/>
Maybe even more importantly, I knew exactly which things I needed to stay committed to. I was able to draw an unbroken causal link between performing the how and achieving the why.<br/><br/>
That was my first run in with brand strategy.<br/><br/>
Brand strategy is, in essence, the exercise of defining the why. Of painting a beautiful, enticing, and motivating picture of the future. It&rsquo;s the delineation of clear actions that one needs to take in order to realize that picture of the future. It&rsquo;s the story that keeps you chugging along even when things get tough.<br/><br/>
When I was craving cigarettes I imagined myself on-stage belting out the big notes that the first album had become so known for. I imagined the feeling of total comfort and confidence in the studio. I imagined the commendations of my friends after hearing my voice. I couldn&rsquo;t smoke, because I wanted all of that. It was a detailed, clear, picture.<br/><br/>
Things are going to get hard for your business. So don&rsquo;t wait to define the why. Take the time to paint a beautiful, enticing, and clear picture of the future. Connect the how to the why with precision.<br/><br/>
Only then will you achieve something as hard as quitting cigarettes, or building a business.<br/><br/>
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
