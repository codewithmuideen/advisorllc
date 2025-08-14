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
import LandingPage from './pages/LandingPage';
import ResumePage from './pages/ResumePage';
import CareerCoachingPage from './pages/CareerCoachingPage';
import LinkedinOptimizationPage from './pages/LinkedinOptimizationPage';
import JobInterviewPage from './pages/JobInterviewPage';

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
          <Route path="/resources" element={<LandingPage />} />
          <Route path="/resume-writing" element={<ResumePage />} />
          <Route path="/career-coaching" element={<CareerCoachingPage />} />
          <Route path="/linkedin-optimization" element={<LinkedinOptimizationPage />} />
          <Route path="/job-interview-preparation" element={<JobInterviewPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
