import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Movies from '../Components/Movies/Movies';
import TVShows from '../Components/TVShows/TVShows';
import Category from '../Views/Category';
import Item from '../Views/Item';

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/category/:category',
    element: <Category />,
  },
  {
    path: '/item/:id',
    element: <Item />,
  },
  {
    path: '/tvshows',
    element: <TVShows />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
]);
