import React from 'react'
import cx from 'clsx'

import styles from './Header.module.css'

type Props = {
  content: string
  className?: string
}

export const Header = ({ content, className }: Props) => (
  <header className={cx(styles.header, className)}>{content}</header>
)
