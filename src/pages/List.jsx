import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import ShopList from '../components/ShopList';

const List = () => {
  const nav = useNavigate();
  return (
    <>
      <Header
        rightChild={<Button text='생성하기' onClick={() => nav('/linkpost')} />}
      />
      <ShopList />
    </>
  );
};

export default List;
