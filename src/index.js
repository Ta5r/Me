import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import Contact from './Contact';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Router>
    <div>
      <ColorModeScript />
      <Routes>
        <Route path="/" component={App} element={<App />} exact />
        <Route
          path="/contact"
          component={Contact}
          element={<Contact />}
          exact
        />
      </Routes>
    </div>
  </Router>
);
