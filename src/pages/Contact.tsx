import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SubmitEvent, useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
export function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  async function submit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const response = await fetch("https://formspree.io/f/mqerqooe", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setSent(true);
      setError(false);
    } else {
      setError(true);
      setSent(false);
    }
  }

  return (
    <div className="page">
      <SectionHeading
        eyebrow="CONTACT"
        title="Let’s build something useful."
        copy="Have a project, opportunity, or question in mind? I’d be glad to hear from you."
      />
      <div className="contact-layout">
        <div className="contact-details">
          <a href="mailto:shubhammane586@gmail.com">
            <Mail />{" "}
            <span>
              <b>Email</b>shubhammane586@gmail.com
            </span>
          </a>
          <a
            href="https://github.com/ShubhamMane1211"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />{" "}
            <span>
              <b>GitHub</b>github.com/ShubhamMane1211
            </span>
          </a>
          <a
            href="https://linkedin.com/in/ShubhamMane1211"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />{" "}
            <span>
              <b>LinkedIn</b>linkedin.com/in/ShubhamMane1211
            </span>
          </a>
          <div>
            <MapPin />{" "}
            <span>
              <b>Location</b>India
            </span>
          </div>
        </div>
        <form onSubmit={submit}>
          <label>
            Name
            <input name="name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input
              name="email"
              required
              type="email"
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              rows={5}
              placeholder="contact me here."
            />
          </label>
          <button className="button primary" type="submit">
            <Send size={17} /> Send message
          </button>
          {sent && (
            <p className="form-note">
              Thanks—your message has been sent successfully
            </p>
          )}
          {error && (
            <p className="form-note">
              Something went wrong. Please email me directly instead.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
