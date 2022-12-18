import React from 'react'

const profileContent = `
宝塚大学の学部 3 年生です。
`

export const Profile = () => {
  return (
    <section>
      <h1>Profile</h1>
      <article>{profileContent}</article>
    </section>
  )
}
