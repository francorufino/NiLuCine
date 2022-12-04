import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Category from '../Views/Category';

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/category/:id',
    element: <Category />,
  },
]);
