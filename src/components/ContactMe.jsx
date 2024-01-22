import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("xwkdylzz");
  if (state.succeeded) {
    return <p>Thanks for your message !</p>;
  }
  return (
    <form id="contact" onSubmit={handleSubmit}>
      <h2 id="contact-title">Contact me !</h2>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
};

export default ContactMe;
