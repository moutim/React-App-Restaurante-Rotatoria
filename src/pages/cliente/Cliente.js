import React from 'react';
import './cliente.css';
import CardCliente from '../../components/cardCliente/CardCliente';

function Cliente() {
  return (
    <div className='container-clientes'>
      <h1>Lista de todos os clientes: </h1>

      <div className='container-cards-clientes'>
        <CardCliente nome='Vitor Moutim'/>
        <CardCliente />
        <CardCliente />
        <CardCliente />
      </div>
    </div>
  )
}

export default Cliente