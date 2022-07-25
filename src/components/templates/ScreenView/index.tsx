import * as React from 'react';
import {ScrollView, Platform, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type TScreenViewProps = {
  hasScroll?: boolean;
  children: React.ReactNode;
};

const ScreenView = ({hasScroll, children}: TScreenViewProps) => {
  const {bottom: bottomInset} = useSafeAreaInsets();
  const scrollContainerStyle = {
    paddingBottom:
      Platform.OS === 'android' ? bottomInset + 20 : bottomInset + 10,
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {hasScroll ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          style={scrollContainerStyle}>
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </View>
  );
};

export default ScreenView;
