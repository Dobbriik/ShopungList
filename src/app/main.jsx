import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import '../../public/addFonts/styleFonts.css';
import { Provider } from 'react-redux';
import { store } from '../shop/store.js';
import { SkeletonTheme } from 'react-loading-skeleton';

createRoot(document.getElementById('root')).render(
  <SkeletonTheme baseColor="#b47ee7ff" highlightColor="#fda05dff">
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>
  </SkeletonTheme>,
);
