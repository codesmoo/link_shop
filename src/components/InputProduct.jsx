import FileInput from './FileInput';
import './InputProduct.css';
const InputProduct = ({ onChange, index, value }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(index, value, name);
  };
  return (
    <div className='InputProduct'>
      <FileInput />
      <div className='text_input_section'>
        <label htmlFor={`product_name_${index}`}>상품 이름</label>
        <input
          name='name'
          id={`product_name_${index}`}
          value={value.name}
          onChange={handleInputChange}
          placeholder='상품 이름을 입력해 주세요.'
        />
      </div>
      <div className='text_input_section'>
        <label htmlFor={`product_price_${index}`}>상품 가격</label>
        <input
          name='price'
          id={`product_price_${index}`}
          value={value.price}
          onChange={handleInputChange}
          placeholder='원화로 표기해 주세요.'
        />
      </div>
    </div>
  );
};

export default InputProduct;
