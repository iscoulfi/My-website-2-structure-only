import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './components/Pages/Home';
import AboutMe from './components/Pages/AboutMe';
import Skills from './components/Pages/Skills';
import FalsePath from './components/Pages/FalsePath';
import Contacts from './components/Pages/Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<FalsePath />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
