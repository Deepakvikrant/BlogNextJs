/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import { useEffect, useState } from "react";

// Step 1 : Find the file corresponding to the slug
// Step 2 : Populate them inside the page

const slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog);
    //const router = useRouter();
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const { slug } = router.query;
    //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    //         .then((a) => {
    //             return a.json();
    //         })
    //         .then((parsed) => {
    //             //console.log(parsed);
    //             setBlog(parsed);
    //         });
    // },[router.isReady]);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1> {blog && blog.title}</h1>
                <br />
                <div>
                    <p>{blog && blog.content}</p>
                </div>
            </main>
        </div>
    );
};

export async function getServerSideProps(context) {
    const {slug} = context.query;
   let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
   let myBlog = await data.json()
    return {
      props: {myBlog},
      // will be passed to the page component as props
    }
  }

export default slug;
