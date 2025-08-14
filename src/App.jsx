import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import ScrollToHash from './ScrollToHash';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TermsAndConditions from './pages/TermsAndConditions';
import ContactPage from './pages/ContactPage';
import SmsPrivacy from './pages/SmsPrivacy';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';

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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sms-privacy" element={<SmsPrivacy />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
