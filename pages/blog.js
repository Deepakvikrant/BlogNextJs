import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


// Step 1 : Collect all the files from blogdata directory


const blog = () => {


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <Link href={'/blogpost/learn-javascript'}>
            <h2 className={styles.blogItemh3}>How to learn JavaScript in 2022?</h2></Link>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h2>How to learn JavaScript in 2022?</h2>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className="blogItem">
          <h2>How to learn JavaScript in 2022?</h2>
          <p>JavaScript is the language used to design logic for the web</p>
        </div>
      </main>
    </div>
  )
};


export default blog