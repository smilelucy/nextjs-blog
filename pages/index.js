import Head from 'next/head'
import Layout, { siteTitle } from '../components/layouts'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
// import styles from './alert.module.css'
// import cn from 'classnames'

// allPostData 是 getStaticProps 抓回來的 external data
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I am Lucy, I am a graduated student from Information Management of ChiNan University。</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// static generation 用來抓 externel data
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>Hello, I am Lucy, I am a graduated student from Information Management of ChiNan University。</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//     </Layout>
//   )
// }

// you can also export an async function called getStaticProps，getStaticProps runs at build time in production
// 告訴她在pre-rendering這頁之前要先解決這頁需要夾帶的data
// export async function getStaticProps() {
//   // Get external data from the file system, API, DB, etc.
//   const data = ...

//   // The value of the `props` key will be
//   //  passed to the `Home` component
//   return {
//     props: ...
//   }
// }