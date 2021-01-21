import Head from "next/head";
import { ContactForm } from "../components/pages/index/ContactForm";

// TODO:
// describe interfaces for components props

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mygento Test Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactForm />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 16px 82px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: SF Pro Display, -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
          outline: none;
        }

        h1 {
          margin: 76px 0 0 0;

          font-size: 40px;
          font-style: normal;
          font-weight: 500;
          line-height: 38px;
          letter-spacing: 0em;
        }
        h2 {
          margin: 40px 0 24px 0;
          font-size: 22px;
          font-style: normal;
          font-weight: 600;
          line-height: 38px;
          letter-spacing: 0em;
        }

        button {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
