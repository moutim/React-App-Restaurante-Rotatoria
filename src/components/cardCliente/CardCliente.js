import React from 'react';
import './cardCliente.css';

function CardCliente() {
  return (
    <div className='cardCliente'>
        <p>Vitor Moutim</p>

        <p><b>Telefone:</b> 998181280</p>
        <p><b>CEP:</b> 04851250</p>
        <p><b>Endereco:</b> Rua Affonso Pauplo</p>
        <p><b>Endereco N:</b> 14 C</p>
        <p><b>Total de pedidos:</b> 10</p>
        <p><b>Total gasto:</b> 289.90</p>
    </div>
  )
}

export default CardCliente