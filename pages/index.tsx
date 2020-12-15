import {FunctionComponent} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/index.module.scss'
const Home:FunctionComponent = () =>  {
  return (
    <div className={styles.container}>
      <h3>Note-Hanging Application Created by Next.js</h3>

      <Link href="/main">
        <button className={styles.proceedButton}>Proceed to the application</button>
      </Link>
    </div>
  )
}


export default Home