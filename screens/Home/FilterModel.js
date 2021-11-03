import React from 'react';
import {
  View,
  Text,
  Animated,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import {
  FONTS,
  SIZES,
  COLORS,
  icons,
  dummyData,
  constants,
} from '../../constants';
import {
  IconButton,
  TwoPointSlider,
  TextButton,
  TextIconbutton,
} from '../../components';

const Section = ({contaierStyle, title, children}) => {
  return (
    <View style={{marginTop: SIZES.padding, ...contaierStyle}}>
      <Text style={{...FONTS.h3}}>{title}</Text>
      {children}
    </View>
  );
};

const FilterModel = ({isVisible, onClose}) => {
  const modelAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const [showFilterModel, setShowFilterModel] = React.useState(isVisible);
  const [delivaryTime, setDelivaryTime] = React.useState('');
  const [ratings, setRatings] = React.useState('');
  const [tags, setTags] = React.useState('');

  React.useEffect(() => {
    if (showFilterModel) {
      Animated.timing(modelAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modelAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModel]);
  const modalY = modelAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 680],
  });

  function renderDistance() {
    return (
      <Section title="Distance">
        <View style={{alignItems: 'center'}}>
          <TwoPointSlider
            values={[3, 10]}
            min={1}
            max={20}
            postfix="km"
            onValueChange={(values) => console.log(values)}
          />
        </View>
      </Section>
    );
  }
  function renderDelivaryTime() {
    return (
      <Section title="Delivary Time" contaierStyle={{marginTop: 40}}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {constants.delivery_time.map((item, index) => {
            return (
              <TextButton
                key={index}
                label={item.label}
                labelStyle={{
                  color: item.id == delivaryTime ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  width: '30%',
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == delivaryTime
                      ? COLORS.primary
                      : COLORS.lightGray2,
                }}
                onPress={() => setDelivaryTime(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }
  function renderPricingRange() {
    return (
      <Section title="Pricing Range">
        <View
          style={{
            alignItems: 'center',
          }}>
          <TwoPointSlider
            values={[10, 50]}
            min={1}
            max={100}
            prefix="$"
            postfix=""
            onValueChange={(value) => console.log(value)}
          />
        </View>
      </Section>
    );
  }
  function renderRatings() {
    return (
      <Section title="Ratings" contaierStyle={{marginTop: 40}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {constants.ratings.map((item, index) => {
            return (
              <TextIconbutton
                key={index}
                containerStyle={{
                  flex: 1,
                  height: 50,
                  margin: 5,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == ratings ? COLORS.primary : COLORS.lightGray2,
                }}
                label={item.label}
                labelStyle={{
                  color: item.id == ratings ? COLORS.white : COLORS.gray,
                }}
                icon={icons.star}
                iconStyle={{
                  tintColor: item.id == ratings ? COLORS.white : COLORS.gray,
                }}
                onPress={() => setRatings(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }
  function renderTags() {
    return (
      <Section title="Tags">
        <View style={{flexDirection: 'row', flexWrap: 'wrap',marginBottom:50}}>
          {constants.tags.map((item, index) => {
            return (
              <TextButton
                key={index}
                label={item.label}
                labelStyle={{
                  color: item.id == tags ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  height: 50,
                  margin: 5,
                  paddingHorizontal: SIZES.padding,
                  alignItems: 'center',
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == tags ? COLORS.primary : COLORS.lightGray2,
                }}
                onPress={() => setTags(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={{flex: 1, backgroundColor: COLORS.transparentBlack7}}>
        {/* transparent baackground */}
        <TouchableWithoutFeedback onPress={() => setShowFilterModel(false)}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}></View>
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: modalY,
            width: '100%',
            height: '100%',
            padding: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: COLORS.white,
          }}>
          {/* Header */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{flex: 1, ...FONTS.h3, fontSize: 18}}>
              Filter Your Search
            </Text>
            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.gray2,
              }}
              icon={icons.cross}
              iconStyle={{tintColor: COLORS.gray2}}
              onPress={() => setShowFilterModel(false)}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 250}}>
            {/* Distance */}
            {renderDistance()}
            {/* Delivary Time */}
            {renderDelivaryTime()}
            {/* Price range section */}
            {renderPricingRange()}
            {/* Rating */}
            {renderRatings()}
            {/* Tags */}
            {renderTags()}
            {/* Apply Button */}
          </ScrollView>

          {/* Apply Butotn */}
          <View
            style={{
              position: 'absolute',
              bottom: 150,
              left: 0,
              right: 0,
              height: 150,
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.radius,
              backgroundColor: COLORS.white,
            }}>
            <TextButton
              label="Apply Filter"
              buttonContainerStyle={{
                height: 50,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary,
              }}
              onPress={() => console.log('apply filter')}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModel;
