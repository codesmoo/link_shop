import './InputContainer.css';

const InputContainer = ({ text, hasButton, child }) => {
  return (
    <div className='InputContainer'>
      <div className='title_wrapper'>
        <div className='text_section font-semibold-16'>{text}</div>
        {hasButton && <button className='font-bold-16'>추가</button>}
      </div>
      {child}
    </div>
  );
};

export default InputContainer;
