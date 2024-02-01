import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";

const ContactMe = () => {
  const [state, handleSubmit, resetForm] = useForm("xwkdylzz");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Message sent",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } else if (state.failed) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Message not sent",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    }

    return () => {
      resetForm();
    };
  }, [state.succeeded, state.failed, resetForm]);

  const validateEmail = (input) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(input);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      e.target.setCustomValidity("Invalid email address");
    } else {
      e.target.setCustomValidity("");
    }
  };

  return (
    <section id="contact">
      <h2>Contact me 📩</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          required
          onInput={handleEmailChange}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          onInput={(e) => e.target.setCustomValidity("")}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactMe;
