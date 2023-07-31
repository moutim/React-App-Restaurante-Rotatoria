import React, { useEffect, useState } from 'react';
import './cliente.css';
import CardCliente from '../../components/cardCliente/CardCliente';
import api from '../../services/axios';

function Cliente() {
  const [clientes, setClientes] = useState([]);

  const getClientes = async () => {
    const result = await api.get('/cliente');
    
    setClientes(result.data);
  }

  useEffect(() => {
    getClientes();
  });

  return (
    <div className='container-clientes'>
      <h1>Lista de todos os clientes: </h1>

      <div className='container-cards-clientes'>
        {
          clientes.length && clientes.map(({ 
            clienteId, nome,
            endereco, enderecoNumero,
            cep, telefone, totalPedidos,
            totalGasto }) => {
            return (
            <CardCliente
              key={ clienteId }
              clienteId={clienteId}
              nome={nome}
              endereco={endereco}
              enderecoNumero={enderecoNumero}
              cep={cep}
              telefone={telefone}
              totalPedidos={totalPedidos}
              totalGasto={totalGasto}
            />
            )
          })
        }
      </div>
    </div>
  )
}


export default Cliente