import styles from './Button.module.css';

const Button = ({ icon, text, isOutline, ...rest }) => { 
  return ( 
  <div> 
    <button 
    {...rest}
    className={ isOutline ? styles.outline_btn : styles.primary_btn}> 
    {icon} 
    {text} 
    </button> 
    </div>
);
}

export default Button;

