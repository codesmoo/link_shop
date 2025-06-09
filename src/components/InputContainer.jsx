import { useState } from 'react';
import './InputContainer.css';

const initialInputList = {
  imageUrl: '',
  name: '',
  price: '',
};
const InputContainer = ({ text, hasButton, child }) => {
  const [inputList, setInputList] = useState([initialInputList]);
  const handleAddInput = () => {
    setInputList(() => {
      return [...inputList, initialInputList];
    });
  };
  return (
    <div className='InputContainer'>
      <div className='title_wrapper'>
        <div className='text_section font-semibold-16'>{text}</div>
        {hasButton && (
          <button onClick={handleAddInput} className='font-bold-16'>
            추가
          </button>
        )}
      </div>
      {inputList.map(() => child)}
    </div>
  );
};

export default InputContainer;
