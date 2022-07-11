import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './Footer';
import Contact from './Contact';
import Projects from './Projects';
import Testimonials from './Testimonials';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <App />
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer/>
  </StrictMode>
);
