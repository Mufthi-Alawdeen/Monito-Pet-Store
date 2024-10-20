import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import Category from './pages/Category';
import PetDetails from './pages/PetDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/pet/:id" element={<PetDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
