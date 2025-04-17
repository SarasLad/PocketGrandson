import React from 'react';
import { Heart } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import WeCare from './pages/WeCare';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
        <motion.nav 
          className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/" className="flex items-center">
                  <Heart className="h-8 w-8 text-orange-600" />
                  <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                    Pocket Grandson
                  </span>
                </Link>
              </motion.div>
              <div className="flex items-center space-x-8">
                {[
                  { to: "/", label: "Home" },
                  { to: "/features", label: "Features" },
                  { to: "/we-care", label: "We Care" },
                  { to: "/contact", label: "Contact Us" }
                ].map((link) => (
                  <motion.div
                    key={link.to}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.to}
                      className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/we-care" element={<WeCare />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gradient-to-t from-orange-50 to-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 text-sm">© 2025 Pocket Grandson. All rights reserved.</p>
            </motion.div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;