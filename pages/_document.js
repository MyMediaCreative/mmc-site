import Document, { Html, Head, Main, NextScript } from "next/document"
import Seo from "../components/meta/seo"


class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

          //<link
          //  rel="stylesheet"
          //  href="https://fonts.googleapis.com/css?family=Staatliches"
          ///>
          //<script
          //  async
          //  src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"
          ///>
