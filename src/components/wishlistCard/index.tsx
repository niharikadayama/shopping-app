import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {addToCart} from 'redux/shopping/action';
import {removeFromWishlist} from 'redux/wishlist/action';

const WishlistCard = ({navigation, items}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.cartCard}>
      <Image source={{uri: items.image}} style={styles.cardImg} />

      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{items.title}</Text>

        <View style={styles.cardBottom}>
          <View style={styles.Price}>
            <Icon name="rupee" size={18} />
            <Text style={styles.pricestyle}>{items.price}</Text>
          </View>
          <TouchableOpacity
            style={styles.cardBottomButtons}
            onPress={() => {
              dispatch(removeFromWishlist(items.id));
            }}>
            <Icon name="trash" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('cart', items);
              dispatch(addToCart(items));
            }}
            style={styles.cardBottomButtons}>
            <Icon name="shopping-cart" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WishlistCard;
