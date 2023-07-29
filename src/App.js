import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cliente from './pages/cliente/Cliente';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Cliente}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
