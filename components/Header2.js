import React from 'react';
import {View, Text} from 'react-native';
import {FONTS} from '../constants';

export default function Header2({
  containerStyle,
  title,
  titleStyle,
  leftComponent,
  rightComponent,
}) {
  return (
      <View style={{
          height:60,
          flexDirection:'row',
          ...containerStyle
      }}>
          {/* leftcomponent */}
            {leftComponent}
          <View style={{
              flex:1,
              alignItems:'center',
              justifyContent:'center'
          }}>
              <Text style={{...FONTS.h3,...titleStyle}}>{title}</Text>
          </View>

          {/* rightComponent */}
          {rightComponent}
      </View>
  )
}
