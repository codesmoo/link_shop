import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';

const New = () => {
  const nav = useNavigate();
  return (
    <>
      {' '}
      <Header rightChild={<Button text='돌아가기' onClick={() => nav(-1)} />} />
    </>
  );
};

export default New;
