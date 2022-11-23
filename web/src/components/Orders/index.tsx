// Importação dos hooks do react
import { useEffect, useState } from 'react';
// Tipagem dos dados retornados da api para o componente de order
import { Order } from '../../types/Orders';
// Objeto contendo o baseURL da api
import { api } from '../../utils/api';
import OrdersBoard from '../OrdersBoard';

// Estilos do componente de orders
import { Container } from './styles';

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      setOrders(data);
    });
  }, [orders]);

  return (
    <Container>
      <OrdersBoard icon="⏳" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👩‍🍳" title="Em produção" orders={orders} />
      <OrdersBoard icon="✔" title="Concluidos" orders={orders} />
    </Container>
  );
}

export default Orders;
