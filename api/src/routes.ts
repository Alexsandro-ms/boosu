import { Router } from 'express';

// Categorias
import { createCategories } from './app/useCases/categories/CreateCategories';
import { listCategories } from './app/useCases/categories/ListCategories';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

// Produtos
import { createProduct } from './app/useCases/products/CreateProduct';
import { listProducts } from './app/useCases/products/ListProducts';

export const router = Router();

// Rota para listar categorias.
router.get('/categories', listCategories);

// Rota de criação de categorias.
router.post('/categories', createCategories);

// Rota para listar produtos.
router.get('/products', listProducts);

// Rota para criar produtos.
router.post('/products', createProduct);
// router.post('/products', upload.single('image'), createProduct);

// Rota para receber produtos por categoria.
router.get('/categories/:categoryId/products', () =>
  console.log('Listar produtos por categorias')
);

// Rota de listagem de pedidos.
router.get('/orders', () => console.log('Listar pedidos'));

// Rota para criar pedidos.
router.post('/orders', () => console.log('criar pedido'));

// Rota para mudar o status do pedido.
router.patch('/orders/:orderId', () => console.log('Mudar Status do pedido'));

// Rota para cancler / deletar pedido.
router.delete('/orders/:orderId', cancelOrder);
