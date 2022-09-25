/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import { useEffect, useState } from "react";
import * as fs from 'fs'

// Step 1 : Find the file corresponding to the slug
// Step 2 : Populate them inside the page

const Slug = (props) => {

    function createMarkup(c) {
        return {__html:c};
      }
      
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
                    <p> { blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div> } </p>
                </div>
            </main>
        </div>
    );
};

// get static site
export async function getStaticPaths() {
  let allb = await fs.promises.readdir('blogdata/')
  allb = allb.map((item)=>{
    return{params: {slug :item.split(".")[0]}}
  })
  console.log(allb);
    return {
      paths: allb,
      fallback: false, // can also be true or 'blocking'
    }
  }
export async function getStaticProps(context) {
   // console.log(context);
    const {slug} = context.params;


   let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8',)
  
    return {
      props: {myBlog : JSON.parse(myBlog)},
      // will be passed to the page component as props
    }
  }

export default Slug;
