import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { api } from '../utils/api';
import { Category } from '../types/Category';
import { Product } from '../types/Product';

import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Categories } from '../components/Categories';
import { Cart } from '../components/Cart';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import {
  CategoriesContainer,
  CenteredContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
} from './styles';

function Main() {
  const [selectedTable, setSelectedTable] = useState(''); // Selecionar Mesa
  const [products, setProducts] = useState<Product[]>([]); // Lista de Produtos
  const [categories, setCategories] = useState<Category[]>([]); // Lista de Categorias
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
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          // onCancelOrder={handleResetOrder}
        />
        {isLoading ? (
          <CenteredContainer>
            <ActivityIndicator color="#D73035" size={'large'} />
          </CenteredContainer>
        ) : (
          <>
            <CategoriesContainer>
              <Categories
                categories={categories}
                // onSelectCategory={handleSelectCategory}
              />
            </CategoriesContainer>
            {isLoadingProducts ? (
              <CenteredContainer>
                <ActivityIndicator color="#D73035" size={'large'} />
              </CenteredContainer>
            ) : (
              <>
                {products.length > 0 ? (
                  <MenuContainer>
                    <Menu
                      products={products}
                      // onAddToCart={handleAddToCart}
                    />
                  </MenuContainer>
                ) : (
                  <CenteredContainer>
                    {/* <Empty /> */}
                    <Text color="#666" style={{ marginTop: 24 }}>
                      Nenhum produto encontrado! :(
                    </Text>
                  </CenteredContainer>
                )}
              </>
            )}
          </>
        )}
      </Container>
      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button onPress={() => alert('click')} disabled={isLoading}>
              Novo Pedido
            </Button>
          )}
          {selectedTable && (
            <Cart
              cartItems={[]}
              onAdd={() => alert('A')}
              onConfirmOrder={() => alert('A')}
              onDecrement={() => alert('A')}
              selectedTable="2"
            />
          )}
        </FooterContainer>
      </Footer>
    </>
  );
}

export default Main;
