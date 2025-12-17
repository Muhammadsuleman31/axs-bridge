"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // keep for default resets
import styles from "./contact.module.css";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        phone,
        message: e.target.message.value,
      }),
      headers: { "Content-Type": "application/json" },
    });

    setStatus(res.ok ? "Message sent!" : "Something went wrong.");
    if (res.ok) e.target.reset();
    if (res.ok) setPhone("");
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <h1>
          Get In <span className="grad">Touch</span>
        </h1>
        <p className={styles.subtitle}>
          We’re here to help you grow beyond boundaries.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />

          <div className={styles.phoneInputWrapper}>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              inputStyle={{
                width: "100%",
                height: "56px",
                borderRadius: "12px",
                border: "1px solid #d0d8ef",
                fontSize: "1rem",
                paddingLeft: "60px",
                background: "rgba(255,255,255,0.95)",
              }}
              buttonStyle={{
                borderRadius: "12px 0 0 12px",
                border: "none",
                boxShadow: "none",
                background: "transparent", // Removed gray
                top: "0px",
              }}
              dropdownStyle={{
                borderRadius: "12px",
                border: "1px solid #d0d8ef",
              }}
              specialLabel=""
            />
          </div>

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
          />
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
