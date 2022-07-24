import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import ScreenView from 'components/templates/ScreenView';
import {getProductDataAPI} from 'contexts/api/endpoints';
// import {ProductCarousel} from 'components';

const Home = () => {
  const [productData, setProductData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const loadProductData = async () => {
      setIsLoading(true);
      const newData = await getProductDataAPI();
      setProductData(newData);
      setIsLoading(false);
    };

    loadProductData();
  }, []);

  return (
    <ScreenView>
      {!isLoading &&
        productData.length > 0 &&
        productData.map(row => {
          // return <ProductCarousel rowTitle={row.title} productList={row.items} />;
        })}
      {isLoading ? <ActivityIndicator /> : null}
    </ScreenView>
  );
};

export default Home;
