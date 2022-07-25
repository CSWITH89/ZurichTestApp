/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity, Text, Image, View} from 'react-native';
import * as React from 'react';
import {SCREEN_HEIGHT} from 'constants/Layout';
import {Spacer} from 'components';
import {startCase} from 'lodash';
import {useNavigation} from '@react-navigation/native';
import {TProduct} from '../../constants/globalTypes';

type TProductCardProps = {
  item: TProduct;
};

const ProductCard = ({item}: TProductCardProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Product Details', item)}
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
      <View style={{marginLeft: 5}}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 16,
          }}>
          {`€ ${item.price}`}
        </Text>
        <Spacer height={5} />
        <Text
          style={{
            fontWeight: '600',
            fontSize: 14,
            color: 'orange',
          }}>
          {startCase(item.title)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
