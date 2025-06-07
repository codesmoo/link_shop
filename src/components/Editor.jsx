import './Editor.css';
import InputContainer from './InputContainer';
import Button from './Button';
import InputProduct from './InputProduct';
import InputShop from './InputShop';
const Editor = () => {
  return (
    <div className='Editor'>
      <InputContainer
        text='대표 상품'
        child={<InputProduct />}
        hasButton={true}
      />
      <InputContainer text='내 쇼핑몰' child={<InputShop />} />
      <Button text='생성하기' type='disabled long' />
    </div>
  );
};

export default Editor;
