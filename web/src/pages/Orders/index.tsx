import React from 'react';

// Importando componentes
import Header from '../../components/Header';
import Orders from '../../components/Orders';

// Importando o estilos dos componentes
import { Container } from './styles';

function OrderPage() {
  return (
    <Container>
      <Header />
      <Orders />
    </Container>
  );
}

export default OrderPage;
