import React, { useState } from 'react';
import api from '../../services/axios';
import CardVenda from '../../components/cardVenda/CardVenda';

function Vendas() {
  const [vendas, setVendas] = useState([]);

  const getClientes = async () => {
    const result = await api.get('/venda');
    
    let totalEmVendas = 0;
    result.data.map(({ total }) => totalEmVendas = totalEmVendas + total);

    result.data.totalEmVendas = totalEmVendas;

    !vendas.length && setVendas(result.data);
  }

  getClientes();

  return (
    <div className='container-clientes'>
      <h1>Total em vendas: {vendas.length && vendas.totalEmVendas}</h1>
      <h1>Quantidade de pedidos: {vendas.length}</h1>

      <div className='container-cards-clientes'>
        {
          vendas.length && vendas.map(({ 
            vendaId, cliente,
            data, produtos,
            pagamento, total }) => {
            return (
            <CardVenda
              key={ vendaId }
              vendaId={ vendaId }
              nomeCliente={ cliente.nome }
              data={ data.toLocaleString('pt-BR') }
              quantidadeProdutos={ produtos.length }
              pagamentoTipo={ pagamento.tipo }
              total={ total }
            />
            )
          })
        }
      </div>
    </div>
  )
}


export default Vendas;