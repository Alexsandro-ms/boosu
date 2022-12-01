import React, { useEffect, useState } from 'react';

// Funções uteis
import { api } from '../utils/api';
// Componentes e estilos
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Container } from './styles';
// Tipagem de dados retornados da api
import { Category } from '../types/Category';
import { Product } from '../types/Product';
import { Cart } from '../components/Cart';

function Main() {
  const [selectedTable, setSelectedTable] = useState('');

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  useEffect(() => {
    Promise.all([api.get('/categories'), api.get('/products')])
      .then(([categoriesResponse, productsResponse]) => {
        setCategories(categoriesResponse.data);
        setProducts(productsResponse.data);
        setIsLoading(false);
      })
      .catch((error) => alert(`Erro: ${error}`));
  }, []);

  return (
    <Container>
      <Header />
      <Menu products={products} />
      {selectedTable && (
        <Cart
          cartItems={[]}
          onAdd={() => alert('Cart')}
          onDecrement={() => alert('Cart')}
          onConfirmOrder={() => alert('Cart')}
          selectedTable={selectedTable}
        />
      )}
    </Container>
  );
}

export default Main;
