import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './components/container/container.css';
import Vendas from './pages/vendas/Vendas';
import Clientes from './pages/clientes/Clientes';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main className='main'>
        <Routes>
          <Route path='/clientes' Component={Clientes}/>
          <Route path='/vendas' Component={Vendas}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
