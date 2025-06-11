import './Header.css';
import logo from './../assets/logo.svg';

const Header = ({ rightChild }) => {
  return (
    <header className='Header'>
      <div className='header_logo'>
        <a href='/list'>
          <img src={logo} />
        </a>
      </div>
      <div className='header_right'>{rightChild}</div>
    </header>
  );
};

export default Header;
