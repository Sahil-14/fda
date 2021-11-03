import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../../constants';
import {
  Header2,
  IconButton,
  CartQuantityButton,
  IconLabel,
  TextButton,
  Linedevider,
  Rating,
  StepperInput,
} from '../../components';

const FoodDetail = ({navigation}) => {
  const [foodItem, setFoodItem] = React.useState(dummyData.vegBiryani);
  const [selectedSize, setSelectedSize] = React.useState('');
  const [qty, setQty] = React.useState(1);
  const renderHeader = () => {
    return (
      <Header2
        title="DETAILS"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<CartQuantityButton quantity={2} />}
      />
    );
  };
  const renderDetail = () => {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}>
        {/* food card */}
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}>
          {/* calories & favourite */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}>
            {/* calories */}
            <View style={{flexDirection: 'row'}}>
              <Image style={{width: 30, height: 30}} source={icons.calories} />
              <Text style={{color: COLORS.darkGray2, ...FONTS.body4}}>
                {foodItem?.calories} Calories
              </Text>
            </View>
            {/* Favourite */}
            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>
          {/* food image */}
          <Image
            source={foodItem?.image}
            resizeMode="contain"
            style={{height: 170, width: '100%'}}
          />
        </View>

        {/* Food info */}
        <View style={{marginTop: SIZES.padding}}>
          {/* Name and Description */}
          <Text style={{...FONTS.h1}}>{foodItem?.name}</Text>
          <Text
            style={{
              ...FONTS.body3,
              marginTop: SIZES.base,
              textAlign: 'justify',
              color: COLORS.darkGray,
            }}>
            {foodItem?.description}
          </Text>
          {/* rating,duration,shipping */}
          <View style={{flexDirection: 'row', marginTop: SIZES.padding}}>
            {/* rating */}
            <IconLabel
              containerStyle={{backgroundColor: COLORS.primary}}
              icon={icons.star}
              label="4.5"
              labelStyle={{color: COLORS.white}}
            />
            {/* duration */}
            <IconLabel
              containerStyle={{
                backgroundColor: COLORS.white,
                marginLeft: SIZES.radius,
              }}
              icon={icons.clock}
              iconStyle={{tintColor: COLORS.black}}
              label="30 Mins"
            />
            {/* shipping */}
            <IconLabel
              containerStyle={{
                backgroundColor: COLORS.white,
                marginLeft: SIZES.radius,
              }}
              icon={icons.dollar}
              iconStyle={{tintColor: COLORS.black}}
              label="Free Shipping"
            />
          </View>

          {/* Sizes */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: SIZES.padding,
              alignItems: 'center',
            }}>
            <Text style={{...FONTS.h3}}>Sizes</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginLeft: SIZES.padding,
              }}>
              {dummyData.sizes.map((item, index) => {
                return (
                  <TextButton
                    key={index}
                    buttonContainerStyle={{
                      width: 55,
                      height: 55,
                      margin: SIZES.base,
                      borderWidth: 1,
                      borderRadius: SIZES.radius,
                      borderColor:
                        selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                      backgroundColor:
                        selectedSize == item.id ? COLORS.primary : null,
                    }}
                    label={item.label}
                    labelStyle={{
                      color:
                        selectedSize == item.id ? COLORS.white : COLORS.gray2,
                      ...FONTS.body2,
                    }}
                    onPress={() => setSelectedSize(item.id)}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderRestaurants = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          alignItems: 'center',
        }}>
        <Image
          source={images.profile}
          style={{width: 50, height: 50, borderRadius: SIZES.radius}}
        />
        {/* Info */}
        <View
          style={{flex: 1, marginLeft: SIZES.radius, justifyContent: 'center'}}>
          <Text style={{...FONTS.h3}}>Bombay hotel</Text>
          <Text style={{color: COLORS.gray, ...FONTS.body4}}>
            1.2 KM from from you
          </Text>
        </View>
        {/* Rating */}
        <Rating rating={4} iconStyle={{marginLeft: 3}} />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 120,
          alignItems: 'center',
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}>
        {/*stepper Input  */}
        <StepperInput
          value={qty}
          onAdd={() => setQty(qty + 1)}
          onMinus={() => {
            if (qty > 1) {
              setQty(qty - 1);
            }
          }}
        />
        {/* Textbutton  */}
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            flexDirection: 'row',
            height: 60,
            marginLeft: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.primary
          }}
          label="Buy Now"
          label2="$15.99"
          onPress={() => navigation.navigate("MyCart")}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {/* heder*/}
      {renderHeader()}
      {/* body */}
      <ScrollView>
        {/* food detail */}

        {renderDetail()}

        <Linedevider />

        {/* restaurant */}
        {renderRestaurants()}
      </ScrollView>
      {/* Footer */}
      <Linedevider />
      {renderFooter()}
    </View>
  );
};

export default FoodDetail;
