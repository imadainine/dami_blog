import emailjs from "@emailjs/browser";
import { AppWrapp, MotionWrap } from "../../wrapper";
import React, { useState, useRef } from "react";
import { client } from "../../client";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import "./ContactMe.scss";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3rbyyab",
        "template_3msy20ff",
        form.current,
        "MPrKd0NhB0cOhizsp"
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (err) => {
          console.log(err.text);
        }
      );
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take coffe & chat with me </h2>
      <div className="app__contact-cards">
        <div className="app__contact-card">
          <AiFillPhone />
          <a href="+213773843669 " className="p-text">
            +21377384336
          </a>
        </div>
        <div className="app__contact-card">
          <MdEmail />
          <a href="#" className="p-text">
            imad.ainine11@gmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <FaMapMarkerAlt />
          <a href="#" className="p-text">
            Cité 30 lgts ElAbadia Aindefla
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          className="app__contact-form app__flex "
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              required
              placeholder="Your name"
              id="name"
              name="name"
              value={name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              required
              name="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              required
              name="message"
              id="message"
              value={message}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button
            className="p-text"
            onClick={handleSubmit}
            type="submit"
            value="Send"
          >
            {loading ? "Sending" : "Send "}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="msg-submited"> Thank you for getting in touch ..!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrapp(
  MotionWrap(ContactMe, "app__contact"),
  "contact",
  "app__whitebg"
);
