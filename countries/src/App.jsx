import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import { ThemeContext } from './context/ThemeContextProvider';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/country/:alpha2Code" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
