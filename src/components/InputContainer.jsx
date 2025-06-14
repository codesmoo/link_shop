import './InputContainer.css';
import InputProduct from './InputProduct';
import InputShop from './InputShop';
const INITIAL_PRODUCT = {
  price: '',
  imageUrl: '',
  name: '',
};
const InputContainer = ({ text, hasButton, type, onChange, values }) => {
  // const [inputProductList, setInputList] = useState([INITIAL_PRODUCT]);

  // const handleAddInput = () => {
  //   setInputList(() => {
  //     return [...inputProductList, INITIAL_PRODUCT];
  //   });
  // };

  const handleAddInput = (e) => {
    e.preventDefault();
    onChange('add', INITIAL_PRODUCT);
  };

  const handleProductChange = (index, value, name) => {
    const targetProduct = values.products[index];
    targetProduct[name] = name === 'price' ? Number(value) : value;
    onChange('products', [...values.products]);
  };

  return (
    <div className='InputContainer'>
      <div className='title_wrapper'>
        <div className='text_section font-semibold-16'>{text}</div>
        {hasButton && (
          <button
            type='button'
            onClick={handleAddInput}
            className='font-bold-16'
          >
            추가
          </button>
        )}
      </div>
      {type === 'product' &&
        values.products.map((v, i) => (
          <InputProduct
            key={i}
            index={i}
            onChange={handleProductChange}
            value={v}
          />
        ))}
      {type === 'shop' && <InputShop onChange={onChange} values={values} />}
    </div>
  );
};

export default InputContainer;
