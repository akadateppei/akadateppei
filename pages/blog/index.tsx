import Head from 'next/head'
import avatarImage from '../../public/logo_bordered.png'
import { CSSProperties } from 'react';

export default function Blog() {
  const backgroundStyle: CSSProperties = {
    backgroundImage: `url(${avatarImage.src})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "70%",
    opacity: "0.08"
  };

  return (
    <div className="container">
      <Head>
        <title>AKADA TEPPEI BLOG</title>
        <link rel="icon" href="/logo_squire.png" />
      </Head>
      <main style={backgroundStyle}>
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
          align-items: top;
          background-color: white;
        }

        main {
          width: 100%;
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
    </div>
  )
}
