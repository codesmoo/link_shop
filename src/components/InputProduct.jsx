import FileInput from './FileInput';
import './InputProduct.css';
const InputProduct = ({ index }) => {
  return (
    <div className='InputProduct'>
      <FileInput />
      <div className='text_input_section'>
        <label htmlFor={`product_name_${index}`}>상품 이름</label>
        <input
          id={`product_name_${index}`}
          placeholder='상품 이름을 입력해 주세요.'
        />
      </div>
      <div className='text_input_section'>
        <label htmlFor={`product_price_${index}`}>상품 가격</label>
        <input
          id={`product_price_${index}`}
          placeholder='원화로 표기해 주세요.'
        />
      </div>
    </div>
  );
};

export default InputProduct;
