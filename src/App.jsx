import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './layouts/Header';
import PageContent from './layouts/PageContent';
import HomePage from './pages/HomePage';
import Footer from './layouts/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PageContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </PageContent>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
