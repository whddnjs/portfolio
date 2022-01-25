import { Route, Routes } from 'react-router-dom';
import EmptyPage from './pages/EmptyPage';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<EmptyPage />} />
    </Routes>
  );
}

export default App;
