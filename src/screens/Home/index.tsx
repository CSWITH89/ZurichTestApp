import * as React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import ScreenView from 'components/templates/ScreenView';
import {getProductDataAPI} from 'contexts/api/endpoints';
import {ProductCard} from 'components';
import {TProduct} from '../../constants/globalTypes';

const renderProduct = (item: TProduct) => {
  return <ProductCard item={item} />;
};

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
      {!isLoading && productData.length > 0 && (
        <FlatList
          data={productData}
          renderItem={({item}) => renderProduct(item)}
          numColumns={2}
          keyExtractor={index => index}
        />
      )}

      {isLoading ? <ActivityIndicator /> : null}
    </ScreenView>
  );
};

export default Home;
