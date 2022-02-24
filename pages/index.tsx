import Head from 'next/head';
import React from "react";
import { useSpring, Transition, animated } from "react-spring";
import avatarImage from "../public/logo_bordered.png";
import twitterIconImage from "../public/twitter_icon.png";
import githubIconImage from "../public/github_icon.png";
import meshiiruIconImage from "../public/meshiiru_icon.png";
import AppLink from '../components/AppLink';
import { getWindowSize } from '../util/WindowSize';

export default function Home() {
  const [isBlogAppear, setBlogAppearance] = React.useState(false);
  const elm = React.useRef(null);
  const openBlog = useSpring({
    from: {
      minHeight: "100vh",
      padding: "0 0.2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "500px",
      x: (getWindowSize().width - elm.current.getBoundingClientRect().width) / 2,
      // marginLeft: "auto",
      // marginRight: "auto",
      backgroundColor: "white",
    },
    to: {
      minHeight: "100vh",
      padding: "0 0.2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // marginLeft: 0,
      x:0,
      width: "400px",
      backgroundColor: "white",
    },
    reverse: isBlogAppear,
    delay: 5
  });

  const toggleBlogAppearance = () => {
    setBlogAppearance(isBlogAppear => !isBlogAppear)
  }

  return (
    <animated.div style={openBlog} ref={elm}>
      <Head>
        <title>AKADA TEPPEI</title>
        <link rel="icon" href="/logo_squire.png" />
      </Head>

      <main>
        <img src={avatarImage.src} width="200" height="154" onClick={toggleBlogAppearance} />
        <h1 className="title">
          Akada Teppei
        </h1>
        <div className="icons">
          <a href="https://twitter.com/potan2005">
            <img src={twitterIconImage.src} width="32" height="32"/>
          </a>
          <a href="https://github.com/akadateppei">
            <img src={githubIconImage.src} width="32" height="32"/>
          </a>  
        </div>

        <h2>
          Works
        </h2>
        <div className="grid">
          <AppLink name="メシイル" description="家族やカップルで晩御飯の予定を共有" image={meshiiruIconImage.src} url="https://itunes.apple.com/jp/app/%E3%83%A1%E3%82%B7%E3%82%A4%E3%83%AB/id1570150194" />
        </div>

        <h2>
          Job Experience
        </h2>
        <p className="description">
          <span className="date">4/2020~　</span>
          iOS Engineer 
          <span className="corpName"> @Moi Corporation</span>
        </p>

        <h2>
          Education
        </h2>
        <p className="description">
          <a href="https://www.mech.nagoya-u.ac.jp/MICRO/">
            Master of Micro-Nano Systems Engineering<br/>
            <span className="corpName"> @Nagoya University</span>
          </a>
        </p>
        <p className="description">
          <a href="https://www.mech.nagoya-u.ac.jp/MICRO/">
            Bachelor of Mechanical and Aerospace Engineering<br />
            <span className="corpName"> @Nagoya University</span>
          </a>
        </p>
      </main>

      <style jsx>{`
        h2 {
          margin-top: 3rem;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 500px;
          margin-left: auto;
          margin-right: auto;
          background-color: white;
        }

        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0.6rem;
          line-height: 1.15;
          font-size: 3rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.2rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .logo {
          height: 1em;
        }

        .icons {
          display: inline-block;
        }

        .icons a {
          padding: 0.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .date {
          color: gray
        }

        .corpName {
          color: #0068ff;
        }

        @media (max-width: 600px) {
          .container {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #0068ff;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </animated.div>
  )
}
