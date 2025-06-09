import './Editor.css';
import InputContainer from './InputContainer';
import Button from './Button';

const Editor = () => {
  return (
    <div className='Editor'>
      <InputContainer text='대표 상품' type='product' hasButton={true} />
      <InputContainer text='내 쇼핑몰' type='shop' />
      <Button text='생성하기' type='disabled long' />
    </div>
  );
};

export default Editor;
