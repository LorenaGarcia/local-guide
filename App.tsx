
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Events from './pages/Events';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<SearchResults />} />
          <Route path="/eventos" element={<Events />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
