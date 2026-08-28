"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [showNotice, setShowNotice] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowNotice(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>FULL NAME</span>
        <input name="name" autoComplete="name" required />
      </label>
      <label>
        <span>EMAIL OR PHONE</span>
        <input name="contact" autoComplete="email" required />
      </label>
      <label>
        <span>MESSAGE</span>
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit">SEND MESSAGE <span aria-hidden="true">→</span></button>
      {showNotice && (
        <p className="contact-form-notice" role="status">
          Thank you. Online message delivery will be available once the church contact email is connected.
        </p>
      )}
    </form>
  );
}
