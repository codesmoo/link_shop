import './Header.css';
import logo from './../assets/logo.svg';
import Button from './Button';
const Header = () => {
  return (
    <header className='Header'>
      <div className='header_logo'>
        <img src={logo} />
      </div>
      <div className='header_right'>
        <Button text='생성하기' />
      </div>
    </header>
  );
};

export default Header;
