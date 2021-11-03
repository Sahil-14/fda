import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {FONTS, SIZES, COLORS, icons, dummyData} from '../../constants';
import {HorizontalFoodCard, VerticalFoodCard} from '../../components';
import { useNavigation } from '@react-navigation/native';

import FilterModel from './FilterModel';
const Section = ({title, onPress, children}) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}>
        <Text style={{flex: 1, ...FONTS.h3}}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{color: COLORS.primary, ...FONTS.body3}}>Show all</Text>
        </TouchableOpacity>
      </View>
      {/* Content */}
      {children}
    </View>
  );
};

const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const [selectedMenuType, setSelectedMenuType] = React.useState(1);
  const [recommended, setRecommended] = React.useState([]);
  const [popular, setPopular] = React.useState([]);
  const [menuList, setMenuList] = React.useState([]);
  const [showFilterModel,setShowFilterModel] = React.useState(false);

  const navigation = useNavigation();

  React.useEffect(() => {
    return handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  const handleChangeCategory = (categotyId, menuTypeId) => {
    //   Retrive the popular
    let selectedPopular = dummyData.menu.find((a) => a.name == 'Popular');
    // Retrive the recommended menu
    let selectedRecommend = dummyData.menu.find((a) => a.name == 'Recommended');
    // find the menu based on the menuTypeId
    let selectedMenu = dummyData.menu.find((a) => a.id == menuTypeId);
    // set popular menu based on categoryid
    setPopular(
      selectedPopular?.list.filter((a) => a.categories.includes(categotyId)),
    );
    //set the recommended menu based on the categoryid
    setRecommended(
      selectedRecommend?.list.filter((a) => a.categories.includes(categotyId)),
    );
    // set the menu based on the categoryid
    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categotyId)),
    );
  };

  // render Search
  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.radius,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}>
        {/* icon */}
        <Image
          source={icons.search}
          style={{height: 20, width: 20, tintColor: COLORS.black}}
        />
        {/* text input */}

        <TextInput
          style={{flex: 1, marginLeft: SIZES.radius, ...FONTS.body3}}
          placeholder="Search food..."
        />
        {/* filter button */}

        <TouchableOpacity onPress={() => setShowFilterModel(true)}>
          <Image
            source={icons.filter}
            style={{height: 20, width: 20, tintColor: COLORS.black}}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function renderMenuType() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight:
                index == dummyData.menu.length - 1 ? SIZES.padding : 0,
            }}
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(selectedCategoryId, item.id);
            }}>
            <Text
              style={{
                color:
                  selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                ...FONTS.h3,
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
  function renderPopular() {
    return (
      <Section title="Popular Near You" onPress={() => console.log('show all')}>
        <FlatList
          data={popular}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicat={false}
          renderItem={({item, index}) => (
            <VerticalFoodCard
              containerStyle={{
                marginLeft: index == 0 ? SIZES.padding : 18,
                padding: 18,
                marginRight: index == popular.length - 1 ? SIZES.padding : 0,
              }}
              item={item}
              onPress={() => navigation.navigate("FoodDetail")}
            />
          )}
        />
      </Section>
    );
  }

  function renderRecommendedSection() {
    return (
      <Section title="Recommonded" onPress={() => console.log('recommended')}>
        <FlatList
          data={recommended}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <HorizontalFoodCard
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight:
                  index == recommended.length - 1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: 'center',
              }}
              imageStyle={{
                marginTop: 35,
                height: 150,
                width: 150,
              }}
              item={item}
              onPress={() => console.log('hor recommended')}
            />
          )}
        />
      </Section>
    );
  }

  function renderFoodCategories() {
    return (
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              height: 55,
              marginTop: SIZES.padding,
              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
              marginRight: index == 0 ? SIZES.padding : SIZES.radius,
              backgroundColor:
                selectedCategoryId == item.id
                  ? COLORS.primary
                  : COLORS.lightGray2,
              paddingHorizontal: 8,
              borderRadius: SIZES.radius,
            }}
            onPress={() => {
              setSelectedCategoryId(item.id);
              handleChangeCategory(item.id, selectedMenuType);
            }}>
            <Image
              source={item.icon}
              style={{marginTop: 5, height: 50, width: 50}}
            />
            <Text
              style={{
                alignSelf: 'center',
                marginRight: SIZES.base,
                color:
                  selectedCategoryId == item.id
                    ? COLORS.white
                    : COLORS.darkGray,
                ...FONTS.h3,
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
  function renderDelivaryTo() {
    return (
      <View style={{marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
        <Text style={{color: COLORS.primary, ...FONTS.body3}}> DEIVERY TO</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
            alignItems: 'center',
          }}>
            <Text style={{...FONTS.h3}}>{dummyData?.myProfile?.address}</Text>
            <Image style={{marginLeft:SIZES.base,height:20,width:20}} source={icons.down_arrow}/>
          </TouchableOpacity>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* Search */}
      {renderSearch()}
       {/* Filter */}
       {showFilterModel && 
       <FilterModel isVisible={showFilterModel} onClose={() => setShowFilterModel(false)}/>
       }
      {/* List */}
      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Delivary to */}
            {renderDelivaryTo()}
            {/* Food category */}
            {renderFoodCategories()}
            {/* Popular */}
            {renderPopular()}
            {/* recommended */}
            {renderRecommendedSection()}
            {/* Menu tupe */}
            {renderMenuType()}
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => console.log('ok')}
            />
          );
        }}
        ListFooterComponent={
          <View style={{height:200}}/>
        }
      />
    </View>
  );
};

export default Home;
