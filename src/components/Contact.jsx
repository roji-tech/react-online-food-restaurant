import React, { useState } from "react";
import Newsletter from "./Newsletter";
import "../css/contact.css";
import {
  FaAddressBook,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  // control form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Meage Delivered");
    setValue({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  // set input values as state
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  return (
    <section className="contact-section">
      <h1 className="custom-title contact-title">
        Contact Us <span></span>
      </h1>
      <div className="row">
        <div className="col-2">
          <div className="address-lists">
            <FaAddressBook className="address-icon" />
            <p className="address-text">
              4500 Spring Avenue, Fort Washington, Pennsylvania
            </p>
          </div>
          <div className="address-lists">
            <FaPhoneAlt className="address-icon" />
            <p className="address-text">267-693-9364</p>
          </div>

          <div className="address-lists">
            <HiOutlineMail className="address-icon" />
            <p className="email address-text">example@email.com</p>
          </div>
          <div className="row-2 social-media">
            <FaTwitter className="social-media-icon" />
            <FaFacebookF className="social-media-icon" />
            <FaInstagram className="social-media-icon" />
            <FaWhatsapp className="social-media-icon" />
          </div>
        </div>

        <div className="col-2">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="First Name"
              className="input"
              required
              value={value.firstName}
              onChange={(e) =>
                setValue({ ...value, firstName: e.target.value })
              }
            />
            <input
              type="text"
              name="name"
              placeholder="Last Name"
              className="input"
              required
              value={value.lastName}
              onChange={(e) => setValue({ ...value, lastName: e.target.value })}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input"
              required
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Type your message here"
              className="input"
              required
              value={value.message}
              onChange={(e) =>
                setValue({ ...value, message: e.target.maeesage })
              }
            ></textarea>
            <button type="submit" className="contact-submit-btn">
              Message
            </button>
          </form>
        </div>
      </div>

      <Newsletter />
    </section>
  );
};

export default Contact;
