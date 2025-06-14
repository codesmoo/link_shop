import FileInput from './FileInput';
import './InputShop.css';
const InputShop = ({ onChange, values }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  return (
    <div className='InputShop'>
      <FileInput />
      <div className='text_input_section'>
        <label htmlFor='shop_name'>이름</label>
        <input
          name='name'
          id='shop_name'
          placeholder='표시하고 싶은 이름을 적어 주세요.'
          onChange={handleInputChange}
          value={values.name}
        />
      </div>
      <div className='text_input_section'>
        <label htmlFor='shop_url'>Url</label>
        <input
          name='urlName'
          id='shop_url'
          placeholder='Url을 입력해주세요.'
          onChange={handleInputChange}
          value={values.shop.urlName}
        />
      </div>
      <div className='text_input_section'>
        <label htmlFor='user_id'>유저 ID</label>
        <input
          name='userId'
          id='user_id'
          placeholder='유저 ID를 입력해주세요.'
          onChange={handleInputChange}
          value={values.userId}
        />
      </div>
      <div className='text_input_section'>
        <label htmlFor='user_pw'>비밀번호</label>
        <input
          name='password'
          id='user_pw'
          placeholder='비밀번호를 입력해주세요.'
          onChange={handleInputChange}
          value={values.password}
        />
      </div>
    </div>
  );
};

export default InputShop;
