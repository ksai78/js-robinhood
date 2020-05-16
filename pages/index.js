import Head from 'next/head'
import Layout, { siteTitle } from '/Users/kpad/nextjs-blog/pages/components/layout'
import utilStyles from '/Users/kpad/nextjs-blog/pages/styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home( {allPostsData} ) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Simple Robinhood-like web app that allows the user to view up to date information on a list of tickers.]</p>
        <p>
          (Building a website based on this {' '}
          <a href="https://robinhood.com/collections/100-most-popular">model</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Tickers</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <a href = "https://www.google.com/search?tbm=fin&sxsrf=ALeKk0165gWQE-po8G4XOejio2vRYKB5qw:1589564761159&q=NASDAQ:+NFLX&stick=H4sIAAAAAAAAAONgecRoyi3w8sc9YSmdSWtOXmNU4-IKzsgvd80rySypFJLgYoOy-KR4uLj0c_UNzKtyjcqSeBax8vg5Brs4Blop-Ln5RAAAvYIf3kkAAAA&sa=X&ved=2ahUKEwjWwL6XtrbpAhVOkHIEHZa8CdkQ3ecFMAB6BAgbEBM&biw=1441&bih=751#scso=_ode-XoCrE57DytMP55G4kAU1:0" > Link</a>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  ) 
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}