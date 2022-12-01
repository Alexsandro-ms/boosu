import { useState } from 'react';
import { FlatList } from 'react-native';

import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';

import { ProductModal } from '../ProductModal';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';

import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCartButton,
} from './styles';

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export function Menu({ onAddToCart, products }: MenuProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setselectedProduct] = useState<null | Product>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setselectedProduct(product);
  }
  return (
    <>
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(product) => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `http://192.168.0.10:3001/uploads/${product.imagePath}`,
              }}
            />
            <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight="600">
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>
            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      ></FlatList>

      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
    </>
  );
}
