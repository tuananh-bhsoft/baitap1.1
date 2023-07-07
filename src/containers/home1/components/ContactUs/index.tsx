import { FC } from "react";

import contactAnimation from "../../../../assets/imgs/contact/ContactAnimations.svg";
import "./style.scss";

const ContactUs: FC = () => {
  return (
    <div className="contact-us">
      <div className="section-content">
        <img src={contactAnimation} alt="Contact us" />
      </div>
      <div className="section-info">
        <p className="section-header">Contact Us</p>
        <p className="section-title">Send your inquiry to our expert team</p>
        <p className="section-description">
          Lorem ipsum dolor sit amet nulla turapis tellus.
        </p>
        <form action="/" method="POST" id="form">
          <div className="name">
            <input type="text" name="first_name" placeholder="First name" />
            <input type="text" name="last_name" placeholder="Last name" />
          </div>
          <input
            type="email"
            name="email_address"
            placeholder="Email address"
          />
          <input
            type="text"
            name="subject_message"
            placeholder="Subject message"
          />
          <textarea
            name="message"
            placeholder="Your inquiry here"
            cols={30}
            rows={10}
          ></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
