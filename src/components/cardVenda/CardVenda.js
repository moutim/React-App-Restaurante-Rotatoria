import React from 'react';
import './cardVenda.css';

function CardVenda(props) {
  const { 
    vendaId, pagamentoTipo,
    data, nomeCliente,
    quantidadeProdutos,
    total } = props;

  return (
    <div className='cardCliente'>
        <p>Pedido #{ vendaId }</p>

        <p><b>Cliente:</b> { nomeCliente }</p>
        <p><b>Data:</b> { data }</p>
        <p><b>Quantidade de produtos:</b> { quantidadeProdutos }</p>
        <p><b>Tipo do pagamento:</b> { pagamentoTipo }</p>
        <p><b>Total:</b> { total }</p>
    </div>
  )
}

export default CardVenda;