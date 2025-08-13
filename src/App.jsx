import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import ScrollToHash from './ScrollToHash';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToHash />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
