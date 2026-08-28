"use client";

import { FormEvent, useEffect, useState } from "react";

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowNotice(true);
  }

  if (!mounted) {
    return <div className="contact-form contact-form-placeholder" aria-hidden="true" />;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} suppressHydrationWarning>
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
