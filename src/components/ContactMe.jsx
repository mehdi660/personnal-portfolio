import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ContactMe = () => {
  const { t } = useTranslation();

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
      <h2>{t("hmu_title")}</h2>
      <div id="contact-section">
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="email">
            {t("hmu_mail")}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            required
            onInput={handleEmailChange}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label className="label" htmlFor="message">
            Message
          </label>
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

          <Button
            type="submit"
            disabled={state.submitting}
            color="ffbf00"
            size="lg"
            className="mb-5 submit"
          >
            {t("hmu_submit")}
          </Button>
        </form>
        <div id="contact-info">
          <h3>Contact</h3>
          <a href="mailto:mehdi.belgoumrii@gmail.com">
            mehdi.belgoumrii@gmail.com
          </a>
          <br />

          <a href="tel:+06 52 23 75 50">06 52 23 75 50</a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
