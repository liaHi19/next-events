import { useState } from "react";
import { apiBase } from "../../../api/axiosConfig";

import styles from "./newsletter-registration.module.css";

const NewsletterRegistration = () => {
  const [email, setEmail] = useState("");

  function registrationHandler(event) {
    event.preventDefault();

    apiBase.post("/", { email });
    setEmail("");
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
