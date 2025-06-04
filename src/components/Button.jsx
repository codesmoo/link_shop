import './Button.css';

const Button = ({ text, type, onClick }) => {
  return (
    <button
      className={`Button font-semibold-15 Button_${type} `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
