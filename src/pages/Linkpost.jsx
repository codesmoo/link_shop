import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import Editor from '../components/Editor';

const New = () => {
  const nav = useNavigate();
  return (
    <>
      <Header
        rightChild={
          <Button text='돌아가기' type='blue' onClick={() => nav(-1)} />
        }
      />
      <Editor />
    </>
  );
};

export default New;
