import './Editor.css';
import InputContainer from './InputContainer';
import Button from './Button';
import { useState } from 'react';
import { createShop } from '../api';

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
  const [submittingError, setSubmittingError] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const formData = new FormData();
    formData.append('shop', JSON.stringify(values.shop));
    formData.append('products', JSON.stringify(values.products));
    formData.append('password', values.password);
    formData.append('userId', values.userId);
    formData.append('name', values.name);
    console.log(formData);
    try {
      setSubmittingError(null);

      await createShop(formData);
    } catch (error) {
      setSubmittingError(error);
      return;
    }

    setValues(INITIAL_VALUES);
  };

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
      <Button text='생성하기' onClick={handleSubmit} type='disabled long' />
    </form>
  );
};

export default Editor;
