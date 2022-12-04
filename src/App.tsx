import { Routes, Route } from 'react-router-dom';
import PlanetPage from './pages/PlanetPage';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PlanetPage />} />
      <Route path="/:planet" element={<PlanetPage />} />
      <Route />
    </Routes>
  );
}

export default App;
