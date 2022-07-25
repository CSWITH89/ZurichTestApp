/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import ScreenView from 'components/templates/ScreenView';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from 'constants/Layout';
import {Spacer} from 'components';
import {TProductImage} from '../../constants/globalTypes';

const ProductDetails = ({route}: any) => {
  const productData = route.params;

  return (
    <ScreenView hasScroll>
      <View style={{width: SCREEN_WIDTH}}>
        <Image
          resizeMode="cover"
          source={{uri: productData.images[0].original}}
          style={{height: SCREEN_WIDTH * 0.8, width: SCREEN_WIDTH}}
        />
      </View>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <Spacer height={5} />
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'orange'}}>
          {`${productData.title}`}
        </Text>
        <Spacer height={5} />

        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          {`€ ${productData.price}`}
        </Text>
        <Spacer height={10} underlined />
        <Spacer height={5} />

        <Text style={{fontSize: 14, fontWeight: '400'}}>
          {productData.description}
        </Text>
        <Spacer height={20} />
        <Text style={{fontSize: 10, fontWeight: '400', color: 'grey'}}>
          {productData.specification}
        </Text>
        <Spacer height={30} />
        <ScrollView horizontal>
          {productData.images.map((imageData: TProductImage) => {
            return (
              <Image
                resizeMode="cover"
                source={{uri: imageData.thumb}}
                style={{
                  height: SCREEN_HEIGHT * 0.2,
                  width: SCREEN_HEIGHT * 0.16,
                  marginRight: 5,
                }}
              />
            );
          })}
        </ScrollView>
      </View>
    </ScreenView>
  );
};

export default ProductDetails;
