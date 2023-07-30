import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cliente from './pages/cliente/Cliente';
import Navbar from './components/navbar/Navbar';
import './components/container/container.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main className='main'>
        <Routes>
          <Route path='/clientes' Component={Cliente}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
