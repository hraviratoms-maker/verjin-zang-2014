import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PhotoPage from './pages/PhotoPage/PhotoPage';
import LetterPage from './pages/LetterPage/LetterPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page1" element={<LetterPage />} />
        <Route path="/page2" element={<PhotoPage />} />
        <Route path="/page3" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;