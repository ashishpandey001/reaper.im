import Head from 'components/head'
import Layout from 'components/Layout'
import Spacer from 'components/Spacer'
import getPosts from 'lib/get-posts'
import Link from 'next/link'
import Router from 'next/router'

const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog | Reaper</title>
      </Head>
      <Layout>
        <div className='container'>
          <ul className='card-border min-width-150-px'>
            {posts.map(({ meta }, index) => {
              return (
                <li key={index}>
                  <Link href={`blog/${meta.slug}`}>
                    <a>{meta.title}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
          <Spacer y={1} />
          <button
            className='margin-top-sm  align-start button black outline-btn'
            onClick={() => Router.push('/')}
          >
            Back
          </button>
          <Spacer y={2} />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const posts = await getPosts()
  return {
    props: {
      posts
    }
  }
}

export default Blog
