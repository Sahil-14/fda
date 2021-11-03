import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {FONTS, COLORS, SIZES, icons} from '../constants';

const VerticalFoodCard = ({containerStyle, item, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 200,
        padding: SIZES.radius,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
      onPress={onPress}
      >
      {/* Caloriwe nad favourite */}
      <View style={{flexDirection: 'row'}}>
        {/* caloriew */}
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={icons.calories} style={{width: 30, height: 30}} />
          <Text style={{color: COLORS.darkGray2, ...FONTS.body5}}>
            {item.calories} Calories
          </Text>
        </View>
        {/* Favourite */}
        <Image
        source={icons.love}
        style={{width:20,height:20,tintColor:item.isFavourite ? COLORS.primary :COLORS.gray}}
        />   
      </View>
       {/* Image */}
       <View style={{height:150,width:150,alignItems:'center',justifyContent:'center'}}>
           <Image
           source={item.image}
           style={{height:'100%',width:'100%'}}
           />

       </View>
      {/* Info */}
      <View style={{alignItems:'center',marginTop:-20}}>
      {/* name */}
<Text style={{...FONTS.h3}}>{item.name}</Text>
      {/* Des */}
      <Text style={{...FONTS.body5,color:COLORS.darkGray2}}>{item.description}</Text>
{/* price */}
<Text style={{...FONTS.h2}}>${item.price}</Text>

      </View>
    </TouchableOpacity>
  );
};

export default VerticalFoodCard;
