import React from 'react'
import Head from 'next/head'

import { Profile } from '@/components/model/profile/Profile'
import { Works } from '@/components/model/works/Works'

import styles from './Top.module.css'

export const Top = () => {
  return (
    <>
      <Head>
        <title>Miyu&apos;s Portfolio</title>
      </Head>

      <main className={styles.top}>
        <Profile />
        <Works />
      </main>
    </>
  )
}
