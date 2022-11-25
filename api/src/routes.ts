import { Router } from 'express';

export const router = Router();

// List Categories
router.get('/categories', () => console.log('Lista de categorias'));

// Create Categories
router.post('/categories', () => console.log('Criar de categorias'));

// List Products
router.get('/products', () => console.log('Lista de produtos'));

// Create Products
router.post('/products', () => console.log('Criar produtos'));
// router.post('/products', upload.single('image'), createProduct);

// Get Products by Category
router.get('/categories/:categoryId/products', () =>
  console.log('Listar produtos por categorias')
);

// List Orders
router.get('/orders', () => console.log('Listar pedidos'));

// Create Order
router.post('/orders', () => console.log('criar pedido'));

// Change Order Status
router.patch('/orders/:orderId', () => console.log('Mudar Status do pedido'));

// Delete / Cancel Order
router.delete('/orders/:orderId', () => console.log('deletar/cancelar pedido'));
