import App from "next/app"
import Head from "next/head"
import { PageTransition } from 'next-page-transitions'
import "../assets/css/style.css"
import "../assets/css/font.css"
import "../assets/css/color.css"
import "../assets/css/screen-sizes.css"
import 'jquery/dist/jquery.min.js'


const MyApp = ({ Component, router, pageProps }) => {

  return (
    <>
      <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-G7VW2D5BYR"></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-G7VW2D5BYR');`
            }}
          />
      </Head>
        <PageTransition timeout={450} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 450ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 450ms;
          }
        `}</style>
    </>
  )
}

// const MyApp = ({ Component, pageProps }) => {
//   const { global } = pageProps
//
//   return (
//     <>
//       <Head>
//         <link
//           rel="shortcut icon"
//           href={getStrapiMedia(global.attributes.favicon)}
//         />
//       </Head>
//       <GlobalContext.Provider value={global.attributes}>
//         <Component {...pageProps} />
//       </GlobalContext.Provider>
//     </>
//   )
// }
// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
// MyApp.getInitialProps = async (ctx) => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(ctx)
//   // Fetch global site settings from Strapi
//   const globalRes = await fetchAPI("/global", {
//     populate: {
//       favicon: "*",
//       defaultSeo: {
//         populate: "*",
//       },
//     },
//   })
  // Pass the data to our page via props
//  return { ...appProps, pageProps: { global: globalRes.data } }
//}

export default MyApp
