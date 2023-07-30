import React from 'react';
import './cliente.css';
import CardCliente from '../../components/cardCliente/CardCliente';

function Cliente() {
  return (
    <div className='container-clientes'>
      <h1>Lista de todos os clientes: </h1>

      <CardCliente />
    </div>
  )
}

export default Cliente