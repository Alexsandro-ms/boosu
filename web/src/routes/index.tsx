// Importando components do react router package
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importando páginas
import OrderPage from '../pages/Orders';

function AppRoutes() {
  return (
    /* Componentes do react router que é responsável por rotear as páginas. */
    <BrowserRouter>
      <Routes>
        {/* definindo as rotas */}
        <Route path="/" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
