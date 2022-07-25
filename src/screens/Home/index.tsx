import * as React from 'react';
import {ActivityIndicator, Text, FlatList, View, Image} from 'react-native';
import ScreenView from 'components/templates/ScreenView';
import {getProductDataAPI} from 'contexts/api/endpoints';
import {SCREEN_HEIGHT} from '../../constants/Layout';
// import {ProductCard} from 'components';

// productData.map(row => {
// return <Text>{`${row}`}</Text>;
// return <ProductCard rowTitle={row.title} productList={row.items} />;
// })}

const renderProduct = item => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        padding: 1,
        borderColor: 'lightgrey',
        borderWidth: 1,
      }}>
      <Image
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: SCREEN_HEIGHT * 0.3,
        }}
        source={{uri: item.images[0].thumb}}
      />
      <Text
        style={{
          fontWeight: '700',
          fontSize: 16,
        }}>
        {`€ ${item.price}`}
      </Text>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 14,
          color: 'grey',
        }}>
        {item.title}
      </Text>
    </View>
  );
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
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      )}

      {isLoading ? <ActivityIndicator /> : null}
    </ScreenView>
  );
};

export default Home;
