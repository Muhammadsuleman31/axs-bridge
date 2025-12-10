"use client";
import { useState } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
      headers: { "Content-Type": "application/json" }
    });

    setStatus(res.ok ? "Message sent!" : "Something went wrong.");
    if (res.ok) e.target.reset();
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <h1>Get In <span className="gradient-text">Touch</span></h1>
        <p className={styles.subtitle}>
          We’re here to help you grow beyond boundaries.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea name="message" rows={5} placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>

        {status && <p className={styles.status}>{status}</p>}

        <div className={styles.altEmail}>
          Prefer email?  
          <a href="mailto:info@axsbridge.com">info@axsbridge.com</a>
        </div>
      </div>
    </section>
  );
}
