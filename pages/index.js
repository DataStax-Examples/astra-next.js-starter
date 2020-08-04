import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getCharacters } from '../lib/astra'

export default function Home({ characters }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Simple Next.js + <a href="https://astra.datastax.com/register">Astra</a> sample!
        </h1>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div className={styles.grid}>
          {characters.map(character => {
            return (<div key={character.id} className={styles.card}>
              <h3>{character.name}</h3>
              <p>
                  <b>Actor:</b> {character.actorname}<br/>
                  <b>House:</b> {character.housename}
              </p>
            </div>);
          })}
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const characters = (await getCharacters()) || []
  return {
    props: { characters, preview },
  }
}
