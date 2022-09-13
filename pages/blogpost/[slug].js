import React from "react";
import { useRouter } from "next/router";
import styles from '../../styles/blogpost.module.css'

// Step 1 : Find the file corresponding to the slug
// Step 2 : Populate them inside the page

const slug = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  //console.log(router.query);
  const { slug } = router.query;

  return <div className={styles.container}>
  <main className={styles.main}>
    <h1>Title of the page {slug}</h1>
    <br />
    <div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem iusto quas architecto, nostrum assumenda quidem ipsam corrupti at tempora neque dolore esse magnam vitae, ea velit repellendus, nisi quos itaque.</p>
    </div>
    </main>
  </div>;
};

export default slug;
