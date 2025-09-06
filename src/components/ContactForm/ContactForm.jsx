import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useState} from 'react';

const ContactForm = () => { 

  const [name, setName] = useState("vishwa");
  const [email, setEmail] = useState("motivation.leetcode@gmail.com");
  const [text, setText] = useState("patience and persistance matters!");

  const onSubmit = (event) => {
    event.preventDefault();
    
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log("Name :", name);
    console.log("Mail :", email);
    console.log("Text :", text);

  }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button text= "VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px"/>} />
          <Button 
          text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>} />
          </div>
          <Button 
          isOutline = {true}
          text="VIA EMAIL FORM" icon={<MdEmail fontSize="24px"/>} />

          <form onSubmit={onSubmit}>
            <div className={styles.input_holder}>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name'/>
            </div>
            <div className={styles.input_holder}>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email'/>
            </div>
            <div className={styles.input_holder}>
              <label htmlFor='TEXT'>TEXT</label>
              <textarea name='TEXT' rows='8'/>
            </div>
            <div>
              <Button text="SUBMIT" />
            </div> 
          </form>

        </div>
        <div className={styles.contact_image}>
          <img src='./public/images/Service 24_7-pana 1.svg' alt='sevice image'/>
        </div>
    </section>
      
  )
}

export default ContactForm
