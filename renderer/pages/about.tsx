import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = ({ data }) => (
  <Layout title="About | Next.js + TypeScript + Electron Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <a href="https://jsonplaceholder.typicode.com/todos/1">Server-side request:</a>
    <pre>{JSON.stringify(data)}</pre>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  const data = await res.json()

  console.log(data);

  // Pass data to the page via props
  return { props: { data } }
}

export default AboutPage
