import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layouts'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
            {/* The Link component enables client-side navigation between two pages in the same Next.js app */}
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}