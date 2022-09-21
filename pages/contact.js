import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone, email, name, description);

    const data = { phone, email, name, description };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("thanks for contacting us")
        setPhone('')
        setEmail('')
        setName('')
        setDescription('')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "description") {
      setDescription(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <h1>contact us</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formLebel}>
              Enter Your Name
            </label>
            <input
              min={3} required
              name="name"
              value={name}
              onChange={handleChange}
              type="text"
              className={styles.input}
              id="name"
              aria-describedby="textHelp"
            />
            <div id="textHelp" className="form-text"></div>
          </div>

          <div className={styles.mb3}>
            <label htmlFor="exampleInputEmail1" className={styles.formLebel}>
              Email address
            </label>
            <input
              min={3} required
              name="email"
              onChange={handleChange}
              value={email}
              type="email"
              className={styles.input}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formLebel}>
              Enter Your Phone
            </label>
            <input
              min={3} required
              name="phone"
              onChange={handleChange}
              value={phone}
              type="text"
              className={styles.input}
              id="name"
              aria-describedby="numberHelp"
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <div className={styles.mb3}>
            <label htmlFor="description" className={styles.formLebel}>
              Description
            </label>
            <textarea
              min={10} required
              name="description"
              value={description}
              onChange={handleChange}
              className={styles.input}
              rows={4}
            />

            <div id="textHelp" className="form-text"></div>
          </div>

          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
