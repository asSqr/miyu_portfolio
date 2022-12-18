import React from 'react'
import Head from 'next/head'

import { Profile } from '@/components/model/profile/Profile'
import { Works } from '@/components/model/works/Works'
import { Contact } from '@/components/model/contact/Contact'

import styles from './Top.module.css'

const topTitle = `Miyu's Portfolio`

export const Top = () => {
  return (
    <>
      <Head>
        <title>{topTitle}</title>
      </Head>

      <main className={styles.top}>
        <Profile />
        <Works />
        <Contact />
      </main>
    </>
  )
}
