import React, {useState, useEffect} from 'react';
import * as RootNavigation from 'services/navigationServices';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {Header, CartCard, Button} from 'components';
import {useSelector} from 'react-redux';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const myCart = useSelector(state => state.cart.cart);
  useEffect(() => {
    let {items, amount} = myCart.reduce(
      (accum, curVal) => {
        let {price, qty} = curVal;
        let UpdatedAmount = price * qty;
        accum.amount += UpdatedAmount;
        accum.items += qty;
        return accum;
      },
      {
        items: 0,
        amount: 0,
      },
    );

    setTotalItem(items);
    setTotalPrice(amount);
  }, [myCart]);
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <Header
        leftIcon={'chevron-back'}
        rightIcon={'person-circle-sharp'}
        iconSize={30}
        onLeftIconPress={() => {
          RootNavigation.pop();
        }}
        onRightIconPress={() => {
          RootNavigation.navigate('profile');
        }}
        showLogo={false}
        title={''}
      />

      <View style={styles.titleView}>
        <Text style={[styles.title, {color: colors.text}]}>My Bag</Text>
        <Text style={[styles.subTitle, {color: colors.text}]}>
          Check and Pay your Item
        </Text>
      </View>

      <FlatList
        data={myCart}
        renderItem={items => {
          return <CartCard itemData={items.item} />;
        }}
      />

      <View style={styles.totalCard}>
        <Text style={[styles.totalCardText, {color: colors.text}]}>
          {totalItem} items
        </Text>
        <Text
          style={[
            styles.totalCardText,
            {color: colors.text},
          ]}>{`Rs. ${totalPrice}`}</Text>
      </View>

      <Button
        name={'Checkout'}
        theme={'primary'}
        onPress={() => {
          RootNavigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default Cart;
