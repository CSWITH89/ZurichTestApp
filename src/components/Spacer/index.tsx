import {View} from 'react-native';
import React from 'react';

type TSpacerProps = {
  height: number;
  underlined?: boolean;
};

type TUnderLineStyle = {
  borderColor: 'grey' | undefined;
  borderBottomWidth: number | undefined;
};

const Spacer = ({height = 0, underlined}: TSpacerProps) => {
  const underlineStyle: TUnderLineStyle = {
    borderColor: undefined,
    borderBottomWidth: undefined,
  };

  if (underlined) {
    underlineStyle.borderColor = 'grey';
    underlineStyle.borderBottomWidth = 1;
  }

  return <View style={{height: height, ...underlineStyle}} />;
};

export default Spacer;
