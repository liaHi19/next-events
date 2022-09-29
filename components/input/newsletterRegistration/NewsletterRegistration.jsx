import { useState } from "react";
import { apiBase } from "../../../api/axiosConfig";

import { useNotification } from "../../../store/NotificationContext";

import styles from "./newsletter-registration.module.css";

const NewsletterRegistration = () => {
  const [email, setEmail] = useState("");
  const { showNotification } = useNotification();

  async function registrationHandler(event) {
    event.preventDefault();
    if (email.trim().length > 3) {
      try {
        showNotification({
          title: "Signing up...",
          message: "Registering for newsletters",
          status: "pending",
        });
        await apiBase.post("/newsletter", { email });
        showNotification({
          title: "Success",
          message: "Successfully registered for newsletters!",
          status: "success",
        });
      } catch (error) {
        showNotification({
          title: "Error",
          message: error.message || "Something went wrong",
          status: "error",
        });
      }

      setEmail("");
    }

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
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
