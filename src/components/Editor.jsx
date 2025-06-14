import './Editor.css';
import InputContainer from './InputContainer';
import Button from './Button';
import { useState } from 'react';

const INITIAL_VALUES = {
  shop: {
    imageUrl: '',
    urlName: '',
    shopUrl: '',
  },
  products: [
    {
      price: '',
      imageUrl: '',
      name: '',
    },
  ],
  password: '',
  userId: '',
  name: '',
};
const Editor = () => {
  const [values, setValues] = useState(INITIAL_VALUES);

  const handleChange = (name, value) => {
    if (name === 'urlName') {
      setValues((prevValues) => ({
        ...prevValues,
        shop: {
          ...prevValues.shop,
          urlName: value,
        },
      }));
    } else if (name === 'add') {
      setValues((prevValues) => ({
        ...prevValues,
        products: [...prevValues.products, value],
      }));
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {};

  return (
    <form className='Editor' onSubmit={handleSubmit}>
      <InputContainer
        text='대표 상품'
        type='product'
        hasButton={true}
        onChange={handleChange}
        values={values}
      />
      <InputContainer
        text='내 쇼핑몰'
        type='shop'
        onChange={handleChange}
        values={values}
      />
      <Button text='생성하기' type='disabled long' />
    </form>
  );
};

export default Editor;
