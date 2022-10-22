import React from 'react'
import Head from 'next/head'

import styles from './Top.module.css'

export const Top = () => {
  return (
    <>
      <Head>
        <title>Miyu&apos;s Portfolio</title>
      </Head>

      <main className={styles.top}>
        <section>
          <h1>Profile</h1>
          <article>宝塚大学の学部 3 年生です</article>
        </section>
        <section>
          <h1>Works</h1>
        </section>
      </main>
    </>
  )
}
