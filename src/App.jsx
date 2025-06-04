import './App.css';
import { Route, Routes } from 'react-router-dom';

import List from './pages/List';
import Linkpost from './pages/Linkpost';
import NotFound from './pages/NotFound';
function App() {
  return (
    <>
      <Routes>
        <Route path='/list' element={<List />} />
        <Route path='/linkpost' element={<Linkpost />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
