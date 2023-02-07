import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><center>I would be a better <s>person</s> software dev if I quit Valorant.</center></p>
        <p>
          <center>
            <a href="https://tracker.gg/valorant/profile/riot/martin%23feliz/overview">tracker.gg</a>
          </center>
        </p>
        <p>
          <center>
            <a href="https://www.tiktok.com/@martinwhiffs">TikTok</a>
          </center>
        </p>
        <p>
          <center>
            <a href="https://www.twitch.tv/martinwhiffs">Twitch</a>
          </center>
        </p>
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
