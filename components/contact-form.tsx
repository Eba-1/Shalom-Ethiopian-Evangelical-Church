"use client";

import { FormEvent, useEffect, useState } from "react";

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [contactValue, setContactValue] = useState("");
  const [contactError, setContactError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValidEmailOrPhone(contactValue)) {
      setContactError("Enter a valid email address or phone number.");
      setShowNotice(false);
      return;
    }
    setContactError("");
    setShowNotice(true);
  }

  function validateContact(value: string) {
    if (!value.trim()) {
      setContactError("Email or phone number is required.");
    } else if (!isValidEmailOrPhone(value)) {
      setContactError("Enter a valid email address or phone number.");
    } else {
      setContactError("");
    }
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
        <input
          name="contact"
          type="text"
          value={contactValue}
          onChange={(event) => {
            setContactValue(event.target.value);
            if (contactError) validateContact(event.target.value);
          }}
          onBlur={(event) => validateContact(event.target.value)}
          aria-invalid={contactError ? "true" : "false"}
          aria-describedby={contactError ? "contact-field-error" : undefined}
          required
        />
        {contactError && (
          <span className="contact-field-error" id="contact-field-error" role="alert">
            {contactError}
          </span>
        )}
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

function isValidEmailOrPhone(value: string) {
  const trimmed = value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const phoneCharacters = /^\+?[\d\s().-]+$/;
  const phoneDigits = trimmed.replace(/\D/g, "");

  return emailPattern.test(trimmed)
    || (phoneCharacters.test(trimmed) && phoneDigits.length >= 10 && phoneDigits.length <= 15);
}
