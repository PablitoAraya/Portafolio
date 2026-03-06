// src/components/ui/Button/Button.jsx
import "./Button.css";

const Button = ({ children, link }) => {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default Button;