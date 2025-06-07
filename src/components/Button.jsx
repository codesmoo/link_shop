import './Button.css';

const Button = ({ text, type, onClick }) => {
  return (
    <button
      className={`Button Button_${type} font-semibold-15`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
