import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {COLORS, icons} from '../constants';
export default function Rating({
  rating,
  iconStyle,
  activeColor = COLORS.orange,
  inctiveColor = COLORS.lightOrange3,
}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 1 ? activeColor : inctiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 2 ? activeColor : inctiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 3 ? activeColor : inctiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 4 ? activeColor : inctiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          tintColor: rating >= 5 ? activeColor : inctiveColor,
          ...styles.rateIcon,
          ...iconStyle,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rateIcon: {
    height: 15,
    width: 15,
  },
});
