import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className='navbar'>
      <nav>
        <ul>
          <li><Link to='/registrar/pedido'>REGISTRAR PEDIDO</Link></li>
          <li><Link to='/registrar/cliente'>REGISTRAR CLIENTE</Link></li>
          <li className='logo'><Link to='/'><img src='https://logodownload.org/wp-content/uploads/2017/02/psg-logo-escudo-paris-saint-germain.png' alt='Logo Restaurante Rotatoria'/></Link></li>
          <li><Link to='/vendas'>TODOS OS PEDIDOS</Link></li>
          <li><Link to='/clientes'>TODOS OS CLIENTES</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar