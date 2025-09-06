import styles from './ContactHeader.module.css';
const ContactHeader = () => {
  return (
    <div className= {`${styles.contact_section} container`}>
      <h1>CONTACT US</h1>
      <p>LET'S CONNECT: WE'RE HEE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! 
        WHETHERE YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, 
        YOU CAN REACHOUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, 
        OR BY PHONE, EMAIL, SOCIAL MEDIA.</p>
    </div>
  )
}

export default ContactHeader;
