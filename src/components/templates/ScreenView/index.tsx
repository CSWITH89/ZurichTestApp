import * as React from 'react';
import {ScrollView, Platform, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ScreenView = ({children}) => {
  const {bottom: bottomInset} = useSafeAreaInsets();
  const scrollContainerStyle = {
    paddingBottom:
      Platform.OS === 'android' ? bottomInset + 20 : bottomInset + 10,
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={scrollContainerStyle}>
        {children}
      </ScrollView>
    </View>
  );
};

export default ScreenView;