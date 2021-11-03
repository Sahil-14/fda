import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {COLORS, FONTS} from '../constants';

const TextButton = ({
  label,
  labelStyle,
  buttonContainerStyle,
  onPress,
  label2 = '',
  label2Style,
  disabled
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}>
      <Text style={{color: COLORS.white, ...FONTS.h3, ...labelStyle}}>
        {label}
      </Text>

      {label2 != '' && (
        <Text
          style={{
            flex: 1,
            textAlign: 'right',
            color: COLORS.white,
            ...FONTS.h3,
            ...label2Style,
          }}>
              {label2}
          </Text>
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
