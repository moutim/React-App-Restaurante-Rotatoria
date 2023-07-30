import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
const logo = require('../../assets/logo.png');

function Navbar() {
  return (
    <header className='navbar'>
      <nav>
        <ul>
          <li><Link to='/registrar/pedido'>REGISTRAR PEDIDO</Link></li>
          <li><Link to='/registrar/cliente'>REGISTRAR CLIENTE</Link></li>
          <li className='logo'><Link to='/'><img src={logo} alt='Logo Restaurante Rotatoria'/></Link></li>
          <li><Link to='/vendas'>TODOS OS PEDIDOS</Link></li>
          <li><Link to='/clientes'>TODOS OS CLIENTES</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar