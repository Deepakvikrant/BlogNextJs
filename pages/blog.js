/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

// Step 1 : Collect all the files from blogdata directory

const blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);

  // useEffect(() => {
  //   //console.log("use effect is runing");
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       //console.log(parsed);
  //       setBlogs(parsed);
  //     });
  // }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Latest Blog Post</h1>
        {blogs.map((blogItem) => {
          return (
            <div key={blogItem.slug}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h2 className={styles.blogItemh3}>{blogItem.title}</h2>
              </Link>
              <p>{blogItem.content.substr(0,400)}</p>
            </div>
          );
        })}


      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs")
  let allBlogs = await data.json()
  return {
    props: {allBlogs},
    // will be passed to the page component as props
  }
}

export default blog;
