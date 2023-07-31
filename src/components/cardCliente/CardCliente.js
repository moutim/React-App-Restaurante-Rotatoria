import React from 'react';
import './cardCliente.css';

function CardCliente(props) {
  const { 
    nome, telefone,
    cep, endereco,
    enderecoNumero,
    totalPedidos,
    totalGasto } = props;

  return (
    <div className='cardCliente'>
        <p>{nome}</p>

        <p><b>Telefone:</b> {telefone}</p>
        <p><b>CEP:</b> {cep}</p>
        <p><b>Endereco:</b> {endereco}</p>
        <p><b>Endereco N:</b> {enderecoNumero}</p>
        <p><b>Total de pedidos:</b> {totalPedidos}</p>
        <p><b>Total gasto:</b> {totalGasto}</p>
    </div>
  )
}

export default CardCliente