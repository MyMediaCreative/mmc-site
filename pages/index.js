import React from "react"
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'
import seoAll from './seo.json'

import { Layout, Nav, Footer, Spacer } from "../components/meta"
import HomeWide from "../components/home-wide"

import Result from "../assets/imgs/home-result.png"

const Home = ({ homepage }) => {

  const seo = seoAll.home;

  let infaque = {
    name: "Centre for Social Innovation",
    title: <>Stories about the <em>better<br/>futures</em> you imagine...</>,
    desc: <>Imagining headlines <br/>from a better future with<br/></>,
    vid:  "https://res.cloudinary.com/mymediacreative/video/upload/v1659119710/home/CSI_Homepage_Banner_gmn5vc.mp4",
    link: "csi",
    mobile: "https://res.cloudinary.com/mymediacreative/image/upload/v1684779897/home/Mobile_CSI_xlystz.png",
    mobilePosition: "50%",
  };
  let mada    = {
    name: "MADA",
    title: <>...and the <em>injustice</em> you<br/> want to end.</>,
    desc: <>Raising $2 million to fight<br/> hunger with</>,
    vid:  "https://res.cloudinary.com/mymediacreative/video/upload/v1645638830/home/HOME_MADA_V5_zdjtu2.mp4",
    link: "mada",
    mobile: "https://res.cloudinary.com/mymediacreative/image/upload/v1646157566/home/Mobile_HOME_2_vg00ix.png",
    mobilePosition: "47%",
  };
  let sh = {
    name: "Smart Hospital Project",
    title: <>Stories that ignite<br/> our <em>passion</em>...</>,
    desc: <>Making innovation feel safe for parents<br/> with the</>,
    vid:  "https://res.cloudinary.com/mymediacreative/video/upload/v1659219192/home/Home_-_Case_3_kvl1ok.mp4",
    link: "sh",
    mobile: "https://res.cloudinary.com/mymediacreative/image/upload/v1646158894/home/SH_HomePage_Mobile_oqpfpd.png",
    mobilePosition: "center center",
  };
  let aisb = {
    name: "Apathy is Boring",
    title: <>...and awaken the<br/> <em>activist</em> in all of us.</>,
    desc: <>Mobilizing young voters<br/> with</>,
    vid:  "https://res.cloudinary.com/mymediacreative/video/upload/v1645638830/home/HOME_AisB_V5_xc1at2.mp4",
    link: "aisb",
    mobile: "https://res.cloudinary.com/mymediacreative/image/upload/v1646157566/home/Mobile_HOME_4_rgrawe.png",
    mobilePosition: "55%",
  };


  var toggle=0;
  const storiesLines = useRef();
  const wide = useRef();
  let options = { threshold: 1.0 }
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const storiesEntry = entries[0];
      if(storiesEntry.isIntersecting) toggleLines();
    }, options);
    observer.observe(storiesLines.current);
  }, []);


  function toggleLines() {
    if(toggle==0) {
      document.getElementsByClassName("top-line")[0].style.width ="100%";
      document.getElementsByClassName("bot-line")[0].style.width ="100%";
      document.getElementsByClassName("lft-line")[0].style.height="100%";
      document.getElementsByClassName("rgt-line")[0].style.height="100%";
      toggle=1;
    }
  }

  return (
    <>
      <div id="home-content">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <div className="home-head">
          <Nav seo={{title:"Home", desc:""}} isBlack={false} active="home" />
            <div className="reg-w">
              <h1>A creative agency <br/> for <em className="dorange">social change.</em></h1>
              <Spacer h="30px" />
              <h5>Mobilizing people to create a just and livable future.</h5>
            </div>
            <Spacer h="140px" />
            <video className="reg" width="100%" autoPlay={true} muted loop playsInline >
              <source src="https://res.cloudinary.com/mymediacreative/video/upload/v1659119707/home/New_Header_April_28th_vhsfdk.mp4" type="video/mp4" />
            </video>
          </div>

        <div className="home-stories grey-lines">
            <div className="home-stories-text">
              <h1 className="xl">As <em className="dorange">changemakers, </em><br />
                there's power in <br />
                <em className="dorange">your stories.</em></h1>
            </div>
            <div className="top-line" />
            <div ref={storiesLines} className="bot-line" />
            <div className="lft-line" />
            <div className="rgt-line" />
          </div>

        <div>
          <HomeWide proj={infaque} />
          <HomeWide proj={mada} />
          <HomeWide proj={sh} />
          <HomeWide proj={aisb} />
        </div>

        <div className="home-logos grey-lines">
          <div className="home-logos-text">
            <h4>We’ve been bringing stories like these to life with <em className="dorange">nonprofits</em>,<br /> <em className="dorange">foundations</em>, and <em className="dorange">mission-driven businesses</em> for a while now…</h4>
            <div className="logo-grid">
              <img src="https://res.cloudinary.com/mymediacreative/image/upload/v1659219267/home/Logos_July2022_n6egfy.png" />
            </div>
            <h4>...and we've <em className="dorange">learned</em> something.</h4>
          </div>
          <div className="lft-line" />
          <div className="rgt-line" />
        </div>

        <div className="home-blue-con bg-dblue">
          <div className="top-line" />
          <div className="bot-line" />
          <div className="lft-line" />
          <div className="rgt-line" />
          <div className="end-line" />
          <div className="toolkit-con">
            <div className="home-toolkit">
              <div>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.5" cy="12.5" r="12.5" fill="#E26E4B"/>
                </svg>
                <h4 className="h4p">Told with the right tools—<br/>these are the stories that <br /> <em className="dorange">mobilize people.</em></h4>
                <Spacer h="50px" />
                <a href="/services" className="arrow-link">Our Services</a>
              </div>
              <div>
                <h5>Our toolkit:</h5>
                <h3 className="h3s">
                  <ul>
                    <li>Campaigns</li>
                    <li>Brands</li>
                    <li>Content</li>
                    <li>Websites</li>
                    <li>Apps</li>
                  </ul>
                </h3>
              </div>
            </div>
          </div>
          <div className="home-results">
            <div className="result-text">
              <Spacer h="80px" />
              <h4 className="h4p">Paired with a good strategy—<br/>they’re the stories that <em className="dorange">drive results.</em></h4>
              <div className="flipPhone">
                <img src="https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1500/v1659370871/home/bg-mockups/Mock1_iln10n_tghocn.png"/>
                <img src="https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1500/v1645744827/home/bg-mockups/Mock6_zlf7w4.png"/>
                <img src="https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1500/v1645744827/home/bg-mockups/Mock5_hw5j9n.png"/>
                <img src="https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1500/v1645744826/home/bg-mockups/Mock4_yvc9ud.png"/>
                <img src="https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1500/v1645744825/home/bg-mockups/Mock3_napohc.png"/>
                <img src="https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_1500/v1645744826/home/bg-mockups/Mock2_kdlr8a.png"/>

                <img style={{opacity:0, position: "relative"}} src="https://res.cloudinary.com/mymediacreative/image/upload/v1645744826/home/bg-mockups/Mock2_kdlr8a.png"/>
              </div>
              <a href="/work" className="arrow-link">Case Studies</a>
              <Spacer h="80px" />
            </div>
          </div>
          <div className="home-dots-con">
            <div className="home-dots reg-w">
              <h1>These are the stories <br /> that <em className="dorange">change the world.</em></h1>
              <div>
                <Spacer h="30px" />
                <h3>These are <em className="dorange">your</em> stories.</h3>
                <h4>We can <em>help you</em> tell them.</h4>
                <Spacer h="30px" />
                <a href="/contact" className="arrow-link">Reach out</a>
              </div>
              <div>
                <svg width="55%" viewBox="0 0 294 322" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="221" cy="73" r="73" fill="#E26E4B"/>
                  <circle cx="199.5" cy="259.5" r="62.5" fill="#E26E4B"/>
                  <circle cx="36.5" cy="169.5" r="36.5" fill="#E26E4B"/>
                </svg>
              </div>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}

export default Home
