import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HEader from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <HEader />
        <Routes>
          {/* Use `element` instead of `component` for React Router v6 */}
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          {/* Catch-all route for 404 */}
          <Route path='*' element={<div>404 Not Found!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
