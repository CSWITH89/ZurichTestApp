/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image} from 'react-native';
import ScreenView from 'components/templates/ScreenView';
import {SCREEN_WIDTH} from 'constants/Layout';

const ProductDetails = ({route}: any) => {
  const productData = route.params;
  return (
    <ScreenView>
      <View style={{width: SCREEN_WIDTH}}>
        <Image
          resizeMode="cover"
          // source={{uri: }}
          style={{height: SCREEN_WIDTH * 0.8, width: SCREEN_WIDTH}}
        />
      </View>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <View style={{height: 5}} />
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          {`${productData}`}
        </Text>
        <View style={{height: 5}} />
        <Text style={{fontSize: 14, fontWeight: '400'}}>{productData}</Text>
      </View>
    </ScreenView>
  );
};

export default ProductDetails;
