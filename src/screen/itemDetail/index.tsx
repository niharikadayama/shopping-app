import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart, addToWishlist} from 'redux/shopping/action';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from 'components';
import {Colors, size} from 'theme';

const ItemDetail = ({navigation, route}) => {
  const item = route.params;
  const sizeCheck = item.size;
  const FlatlistItem = ({item}) => {
    if (sizeCheck === item) {
      return (
        <View style={styles.detailColor}>
          <Text style={[styles.detailSize, styles.selectedDetailSize]}>
            {item}
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.detailColor}>
        <Text style={styles.detailSize}>{item}</Text>
      </View>
    );
  };
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={item.img}
        resizeMode={'cover'}
        style={styles.image}>
        <Icon
          name="ios-chevron-back"
          size={26}
          color={Colors.white}
          style={styles.icon}
          onPress={() => navigation.navigate('root')}
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.detailName}>{item.name}</Text>
          <Text style={styles.detailInfo}>{item.info}</Text>

          <Icon
            name="heart"
            size={25}
            style={styles.detailHeart}
            onPress={() => {
              navigation.navigate('wishlist', item),
                dispatch(addToWishlist(item.id));
            }}
          />

          <Text style={styles.detailNormal}>Color</Text>
          <View style={styles.detailColor}>
            <Icon name="checkmark-circle" size={40} color={item.color} />
            <Icon
              name="ios-help-circle-sharp"
              size={40}
              color={Colors.yellow}
            />
            <Icon name="ios-help-circle-sharp" size={40} color={Colors.coral} />
          </View>

          <Text style={styles.detailNormal}>Size</Text>
          <FlatList
            numColumns={4}
            data={size}
            renderItem={({item}) => {
              return <FlatlistItem item={item} />;
            }}
          />

          <View style={styles.detailBottom}>
            <Text style={styles.detailPrice}>Rs. {item.price}</Text>

            <Button
              name={'Add To Cart'}
              onPress={() => {
                navigation.navigate('cart', item), dispatch(addToCart(item.id));
              }}
              theme={'secondary'}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ItemDetail;
