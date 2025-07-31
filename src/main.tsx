
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

console.log('main.tsx executing...');
console.log('Document ready state:', document.readyState);

const rootElement = document.getElementById("root");
console.log('Root element found:', !!rootElement);

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (rootElement) {
  console.log('Creating React root...');
  // Use hydration for SSR in production
  if (import.meta.env.PROD) {
    console.log('Using hydration for production...');
    hydrateRoot(rootElement, app);
  } else {
    console.log('Using createRoot for development...');
    const root = createRoot(rootElement);
    root.render(app);
  }
  console.log('App rendered successfully');
} else {
  console.error('Root element not found!');
}
