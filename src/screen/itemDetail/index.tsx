import React from 'react';
import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart} from 'redux/shopping/action';
import {addToWishlist} from 'redux/wishlist/action';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import {Button} from 'components';
import {Colors} from 'theme';

const ItemDetail = ({navigation, route}) => {
  const item = route.params;
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{uri: item.image}}
        resizeMode={'cover'}
        style={styles.image}>
        <Icon
          name="chevron-back"
          size={26}
          color={Colors.mediumGrey}
          style={styles.icon}
          onPress={() => navigation.navigate('root')}
        />

        <View style={styles.detailsContainer}>
          <Text style={styles.detailCategory}>{item.category}</Text>
          <Text style={styles.detailName}>{item.title}</Text>
          <View style={styles.rating}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={item.rating.rate}
              fullStarColor={Colors.yellow}
              emptyStarColor={Colors.mediumGrey}
              starSize={20}
              containerStyle={styles.starRating}
            />
            <Text style={styles.ratingText}>{item.rating.count}</Text>
          </View>
          <Text style={styles.detailPrice}>Rs. {item.price}</Text>
          <Text style={styles.detailInfo}>
            {item.description?.substring(0, 120)}
          </Text>

          <View style={styles.detailBottom}>
            <Button
              name={'Add To Wishlist'}
              onPress={() => {
                navigation.navigate('wishlist', item);
                dispatch(addToWishlist(item));
              }}
              theme={'tertiary'}
            />
            <Button
              name={'Add To Cart'}
              onPress={() => {
                navigation.navigate('cart', item);
                dispatch(addToCart(item));
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
