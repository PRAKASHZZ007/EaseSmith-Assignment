import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import TopOffer from './components/TopOffer/TopOffer';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import PlantAndPots from './components/PlantAndPots/PlantAndPots';
import Testimonial from './components/Testimonial/Testimonial';
import Products from './components/Products/Products';
import ThankYou from './components/ThankYou/ThankYou'; // Import ThankYou component

// Helper component to conditionally render the header components
function Layout({ children }) {
  const location = useLocation();

  // Conditionally hide components on Thank You page
  const isThankYouPage = location.pathname === '/thank-you';

  return (
    <div className="App">
      {!isThankYouPage && <TopOffer />}
      {!isThankYouPage && <Navbar />}
      {!isThankYouPage && <Header />}
      {!isThankYouPage && <PlantAndPots />}
      {!isThankYouPage && <Testimonial />}

      {children} {/* Render the main content (Routes) */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        {/* Define Routes */}
        <Routes>
          <Route path="/EaseSmith-Assignment" element={<Products />} /> {/* Main products page */}
          <Route path="/thank-you" element={<ThankYou />} /> {/* Thank You page */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
