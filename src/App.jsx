import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './layouts/Header';
import PageContent from './layouts/PageContent';
import HomePage from './pages/HomePage';
import Footer from './layouts/Footer';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </PageContent>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
