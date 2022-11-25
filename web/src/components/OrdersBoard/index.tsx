import React, { useState } from 'react';
// Importando a tipagem de Order
import { Order } from '../../types/Orders';
// Importando função que armazena a url base da api
import { api } from '../../utils/api';
// Estilos dos componentes
import { Board, OrdersContainer } from './styles';
// Modal com dados do pedido
import OrderModal from '../OrderModal';

interface OrderBoardProps {
  icon: React.ReactNode;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

function OrderBoard({
  icon,
  title,
  orders,
  onCancelOrder,
  onChangeOrderStatus,
}: OrderBoardProps) {
  /*
   * Recebendo os icones,
   * Titulos, lista de pedidos,
   * Função de cancelamento de pedido, e
   * Função de alterar status do pedido
   */

  // Estado que armazena a visibilidade do modal de pedidos.
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Estado que armazena o item selecionado da lista de pedidos, retornadas da api.
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  // Estado que armazena o carregamento.
  const [isLoading, setIsLoading] = useState(false);

  // Função responsável por abrir o modal, E repassar informações do pedido.
  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }
  // Função responsável pelo fechamento do modal.
  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  // Funçao responsável por cancelar pedido.
  async function handleCancelOrder() {
    setIsLoading(true);
    await api.delete(`/orders/${selectedOrder?._id}`);

    setIsLoading(false);
    setIsModalVisible(false);

    onCancelOrder(selectedOrder!._id);
  }

  // Função responsável por alterar o status do pedido.
  async function handleChangeOrderStatus() {
    setIsLoading(true);
    const status =
      selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    // Enviando uma solicitação à API para atualizar o status do pedido.
    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    onChangeOrderStatus(selectedOrder!._id, status);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <Board>
      {/* Modal de Pedidos */}
      <OrderModal
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onChangeOrderStatus={handleChangeOrderStatus}
      />
      {/* Descrição do quadro de pedidos */}
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{`( ${orders.length} )`}</span>
      </header>
      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenModal(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}

export default OrderBoard;
