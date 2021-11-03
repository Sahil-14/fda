import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  Header2,
  IconButton,
  CartQuantityButton,
  StepperInput,
  FooterTotal,
} from '../../components';
import {FONTS, SIZES, COLORS, icons, dummyData} from '../../constants';
import {SwipeListView} from 'react-native-swipe-list-view';

const MyCart = ({navigation}) => {
  const [myCartList, setMyCartList] = React.useState(dummyData.myCart);

  //handler
  const updateQuantityHandler = (newQty, id) => {
    const newMyCartList = myCartList.map((cl) =>
      cl.id === id ? {...cl, qty: newQty} : cl,
    );

    setMyCartList(newMyCartList);
  };
  const renderHeader = () => {
    return (
      <Header2
        title="My Cart"
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
  const renderCartList = () => {
    return (
      <SwipeListView
        data={myCartList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data, rowMap) => (
          <View
            style={{
              height: 100,
              backgroundColor: COLORS.lightGray2,
              ...styles.cartItemContainer,
            }}>
            {/* Food Image */}
            <View style={{width: 90, height: 100, marginLeft: -10}}>
              <Image
                source={data.item.image}
                resizeMode="contain"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 10,
                }}
              />
            </View>
            {/* Food info */}
            <View
              style={{
                flex: 1,
              }}>
              <Text style={{...FONTS.body3}}>{data.item.name}</Text>
              <Text style={{color: COLORS.primary, ...FONTS.h3}}>
                ${data.item.price}
              </Text>
            </View>
            {/* Quantity */}
            <StepperInput
              containerStyle={{
                height: 50,
                width: 125,
                backgroundColor: COLORS.white,
              }}
              value={data.item.qty}
              onAdd={() =>
                updateQuantityHandler(data.item.qty + 1, data.item.id)
              }
              onMinus={() => {
                if (data.item.qty) {
                  updateQuantityHandler(data.item.qty - 1, data.item.id);
                }
              }}
            />
          </View>
        )}
        renderHiddenItem={(data, rowMap) => (
          <IconButton
            containerStyle={{
              flex: 1,
              justifyContent: 'flex-end',
              backgroundColor: COLORS.primary,
              ...styles.cartItemContainer,
            }}
            icon={icons.delete_icon}
            iconStyle={{marginRight: 10}}
            onPress={() => removeMyCartHandler(data.item.id)}
          />
        )}
      />
    );
  };
  const removeMyCartHandler = (id) => {
    let newMyCartList = [...myCartList];
    const index = newMyCartList.find((cart) => cart.id === id);
    newMyCartList.splice(index, 1);
    setMyCartList(newMyCartList);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {/* Header */}
      {renderHeader()}

      {/* CartList */}
      {renderCartList()}

      {/* Footer */}
      <FooterTotal
        subTotal={37.79}
        shippingFee={0.0}
        total={37.97}
        onPress={() => navigation.navigate('MyCard')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});

export default MyCart;
