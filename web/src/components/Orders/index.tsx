// Importação dos hooks do react
import { useEffect, useState } from 'react';
// Tipagem dos dados retornados da api para o componente de order
import { Order } from '../../types/Orders';
// Objeto contendo o baseURL da api
import { api } from '../../utils/api';
// Estilos do componente de orders
import { Container } from './styles';
// Componentes
import OrdersBoard from '../OrdersBoard';
import { Timer, CookingPot, Check } from 'phosphor-react';

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      setOrders(data);
    });
  }, [orders]);

  // Função  responsável por cancelar o pedido

  function handleCancelOrders(orderId: string) {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  }

  // Função responsável por alterar o status do pedido
  function handleOrdersStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === orderId
          ? {
              ...order,
              status,
            }
          : order
      )
    );
  }

  // Funções para filtrar elementos de acordo com o status
  const waiting = orders.filter((order) => order.status === 'WAITING');
  const inProduction = orders.filter(
    (order) => order.status === 'IN_PRODUCTION'
  );
  const done = orders.filter((order) => order.status === 'DONE');

  return (
    <Container>
      <OrdersBoard
        icon={<Timer size={20} color="#d73035" />}
        title="Fila de espera"
        orders={waiting}
        onCancelOrder={handleCancelOrders}
        onChangeOrderStatus={handleOrdersStatusChange}
      />
      <OrdersBoard
        icon={<CookingPot size={20} color="#d73035" />}
        title="Em produção"
        orders={inProduction}
        onCancelOrder={handleCancelOrders}
        onChangeOrderStatus={handleOrdersStatusChange}
      />
      <OrdersBoard
        icon={<Check size={20} color="#d73035" />}
        title="Concluidos"
        orders={done}
        onCancelOrder={handleCancelOrders}
        onChangeOrderStatus={handleOrdersStatusChange}
      />
    </Container>
  );
}

export default Orders;
