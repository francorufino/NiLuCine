import { Layout } from '../Components/Layout/Layout';
import { useParams } from 'react-router-dom';
import Item from '../Components/Item/Item';
import { item } from '../Mocks/ItemMock/ItemMock';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';

const CategoryView = () => {
  const { category } = useParams();
  const categories = item.filter((product) => product.category === category);

  return (
    <Layout>
      <ItemListContainer />

      <h1>Category view</h1>
    </Layout>
  );
};

export default CategoryView;
