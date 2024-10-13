import React from 'react';
import Styles from '../scss/contact.module.scss';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('access_key', 'c14c5e4c-5c0e-470c-b52b-a7d5145e8ff2');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
    }
  };
  return (
    <div className={Styles.container}>
      <h2>Contact Form</h2>
      <div className={Styles.from}>
        <form className={Styles.fromCheck} onSubmit={onSubmit}>
          <label>Full Name</label>
          <br />
          <input type="text" placeholder="Enter Your Name" name="name" />
          <br />
          <label>Email Adress</label>
          <br />
          <input type="email" placeholder="Enter Your Email" name="email" />
          <br />
          <label>Your Message</label>
          <br />
          <textarea name="message" id="" placeholder="Enter Your Message" required></textarea>
          <button type="submit">Send Data</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
