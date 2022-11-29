import { FlatList } from 'react-native';
import { Product } from '../../types/Product';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import {
  AddToCartButton,
  ProductContainer,
  ProductDetails,
  ProductImage,
  Separator,
} from './styles';

interface MenuProps {
  // onAddToCart: (product: Product) => void;
  products: Product[];
}

export function Menu({ products }: MenuProps) {
  return (
    <>
      {/* FlatList */}
      <FlatList
        data={products}
        keyExtractor={(product) => product._id}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => alert('Detalhes')}>
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
                {product.price}
              </Text>
            </ProductDetails>
            <AddToCartButton onPress={() => alert('Adicionado ao carrinho')}>
              <PlusCircle />
            </AddToCartButton>
          </ProductContainer>
        )}
      ></FlatList>
      {/* Product modal */}
    </>
  );
}
