import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import InputSpinner from 'react-native-input-spinner';
import {useDispatch} from 'react-redux';
import {removeFromCart, adjustQty} from 'redux/shopping/action';

const CartCard = ({itemData}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.cartCard}>
      <View style={styles.imageColumn}>
        <Image source={{uri: itemData.image}} style={styles.cardImg} />
      </View>
      <View style={styles.detailColumn}>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>{itemData.title}</Text>
          <Text style={styles.cardInfo}>
            {itemData.description.substring(0, 20)}
          </Text>

          <View style={styles.quant}>
            <View>
              <InputSpinner
                max={9}
                min={1}
                step={1}
                fontSize={16}
                width={100}
                height={30}
                value={itemData.qty}
                onChange={(num: number) => {
                  dispatch(adjustQty(itemData.id, num));
                }}
              />
            </View>
            <Text style={styles.quantText}>|</Text>
            <View style={styles.Price}>
              <Icon name="rupee" size={18} style={styles.quantRupeeIcon} />
              <Text style={styles.priceStyle}>{itemData.price}</Text>
            </View>
          </View>
          <Pressable
            style={styles.removeButton}
            onPress={() => {
              dispatch(removeFromCart(itemData.id));
            }}>
            <Icon name="trash" size={22} style={styles.RemoveButtonIcon} />
            <Text style={styles.RemoveButtonText}>Remove </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
