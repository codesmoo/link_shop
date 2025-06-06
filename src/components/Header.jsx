import './Header.css';
import logo from './../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const Header = ({ rightChild }) => {
  const nav = useNavigate();
  return (
    <header className='Header'>
      <div className='header_logo'>
        <img src={logo} onClick={() => nav('/list')} />
      </div>
      <div className='header_right'>{rightChild}</div>
    </header>
  );
};

export default Header;
