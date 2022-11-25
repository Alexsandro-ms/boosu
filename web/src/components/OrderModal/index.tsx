import { useEffect } from 'react';
// Tipagem de dados do order
import { Order } from '../../types/Orders';
// Função para formatar numero para real.
import { formatCurrency } from '../../utils/formatCurrency';
// Icones da aplicação.
import { Timer, CookingPot, Check } from 'phosphor-react';
import closeIcon from '../../assets/images/close-icon.svg';
// Estilos de componentes.
import { Actions, ModalBody, OrderDetails, Overlay } from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
  onCancelOrder: () => Promise<void>;
  onChangeOrderStatus: () => void;
  isLoading: boolean;
}

function OrderModal({
  visible,
  order,
  onClose,
  onCancelOrder,
  isLoading,
  onChangeOrderStatus,
}: OrderModalProps) {
  useEffect(() => {
    // Função que adiciona um evento de escape(esc) para fechar modal
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    // Removendo o evento de escape após ser chamado
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Se o modal não estiver visível ou o pedido for nulo, ele não será renderizado  nada.

  if (!visible || !order) {
    return null;
  }

  // Função que calcula o preço total do pedido.
  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Ícone para fechar modal" />
          </button>
        </header>
        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span
              style={{
                lineHeight: 0,
              }}
            >
              {/* Conforme o status do pedido, será renderizado um icone diferente */}
              {order.status === 'WAITING' && (
                <Timer size={18} color="#d73035" />
              )}
              {order.status === 'IN_PRODUCTION' && (
                <CookingPot size={20} color="#d73035" />
              )}
              {order.status === 'DONE' && <Check size={20} color="#d73035" />}
            </span>
            <strong>
              {/* Tratando Texto de exibição do status, conforme retornados da api */}
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto'}
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />
                <span className="quantity">{quantity}x</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>
        <Actions>
          {order.status !== 'DONE' && (
            <button
              type="button"
              className="primary"
              disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              <span>
                {order.status === 'WAITING' && (
                  <CookingPot size={20} color="#d73035" />
                )}
                {order.status === 'IN_PRODUCTION' && (
                  <Check size={20} color="#d73035" />
                )}
              </span>
              <strong>
                {/* Tratando Texto de exibição do botão, conforme status retornados da api */}
                {order.status === 'WAITING' && 'Iniciar Produção'}
                {order.status === 'IN_PRODUCTION' && 'Concluir pedido'}
              </strong>
            </button>
          )}
          <button
            type="button"
            className="secondary"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            <strong>Cancelar Pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}

export default OrderModal;
