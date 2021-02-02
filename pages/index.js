import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Next.js Playground - Index</title>
      </Head>
      <header>
        <h1>Next.js Playground</h1>
        <h5>Project created to explre Next.js features</h5>
      </header>
      <main>
        <Section id="sec1">
          <h4>Nested routes</h4>
          <div className={styles.sec1_content}>
            <Link href="/sec1/pg1">
              <a className={styles.sec1_links}>Who am I?</a>
            </Link>
            <Link href="/sec1/pg2">
              <a className={styles.sec1_links}>Get Your Address</a>
            </Link>
            <Link href="/sec1/pg3">
              <a className={styles.sec1_links}>Pg3</a>
            </Link>
          </div>
        </Section>
      </main>
    </>
  )
}

function Section(props) {
  const style = {
    backgroundColor: 'hsl(' + Math.round(Math.random() * 6) * 60 + ',100%,40%)',
    padding: '5px',
    textShadow: '1px 1px 2px #343a40',
    borderRadius: '10px',
    transitionDuration: '500ms',
    transitionTimingFunction: 'ease-in-out',
  }

  return (
    <section className={styles.section} style={style}>
      {props.children}
    </section>
  );
}