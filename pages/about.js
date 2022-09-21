import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Blog</h1>
      <h2>INTRODUCTION</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit
        reprehenderit, vitae provident voluptatem doloribus sit dolores pariatur
        qui ea veritatis labore sapiente dolorem suscipit aperiam sint?
        Eligendi, dolorem iste? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dicta dolorum quisquam modi possimus libero doloremque
        ipsum quos dolor provident. At quibusdam laudantium explicabo odit harum
        tenetur earum animi porro enim. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Debitis optio facere architecto? Iure expedita,
        itaque, deleniti excepturi laudantium eveniet, omnis possimus blanditiis
        quas quam ex commodi ad atque vitae suscipit.
      </p>
      <h2>Services ofered</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint earum
        similique atque quae voluuas libero voluptates facilis totam suscipit
        eveniet sunt numquam expedita quos possimus deleniti?
      </p>
      <p>Service we offer</p>
      <ul>
        <li>service 1</li>
        <li>service 2</li>
        <li>service 3</li>
        <li>service 4</li>
        <li>service 5</li>
        <li>service 6</li>
      </ul>

      <h2>Contact Us</h2>
      <p> NAME : DEEPAK KUMAR</p>
      <p>EMAIL : deepakvikrant@gmail.com</p>
    </div>
  );
};

export default About;
