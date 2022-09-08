
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Clients from './pages/Clients/Clients';
import Contact from './pages/Contact/Contact';
//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
