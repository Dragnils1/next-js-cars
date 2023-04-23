import Link from 'next/link'
import React, { FC } from 'react'
import styles from './Header.module.scss'
import { useRouter } from 'next/router'

export const Header: FC = () => {

    const { pathname } = useRouter();

    console.log(pathname === '/' ? styles.active : '')

  return (
    <header className={styles.header}>
        <Link href='/' className={pathname === '/' ? styles.active : '' } >Home</Link>
        <Link href='/about' 
            className={pathname === '/about' ? styles.active : '' }>About</Link>
    </header>
  )
}
