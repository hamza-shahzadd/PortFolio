import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_myubw8h', 'template_xvo3g0h', form.current, 'xuXEFSRGOp8sBeD1Z')
      .then((result) => {
          console.log('Success:', result.text);
          alert("Message Sent Successfully");
          form.current.reset();  // Clear the form after successful submission
      }, (error) => {
          console.log('Failed:', error.text);
          alert("Failed to Send Message");
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="from_name"  // Changed to "from_name" to match EmailJS template variable
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="email"  // Changed type to "email" for proper email validation
            name="reply_to"  // Changed to "reply_to" to match EmailJS template variable
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"  // Make sure this matches the variable in your EmailJS template
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
