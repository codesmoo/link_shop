import { useState } from 'react';
import './InputContainer.css';
import InputProduct from './InputProduct';
import InputShop from './InputShop';

const InputContainer = ({ text, hasButton, type }) => {
  const [inputProductList, setInputList] = useState([{}]);
  const handleAddInput = () => {
    setInputList(() => {
      return [...inputProductList, {}];
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
      {type === 'product' &&
        inputProductList.map((v, i) => <InputProduct key={i} index={i} />)}
      {type === 'shop' && <InputShop />}
    </div>
  );
};

export default InputContainer;
