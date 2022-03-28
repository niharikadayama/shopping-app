import React, {useState, useEffect} from 'react';
import * as RootNavigation from '../../services/navigationServices';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {Header, CartCard, Button} from 'components';
import {useSelector} from 'react-redux';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const myCart = useSelector(state => state.cart.cart);
  useEffect(() => {
    let items = myCart.reduce(
      (items: number, item: {qty: number}) => items + item.qty,
      0,
    );
    let price = myCart.reduce(
      (price: number, item: {qty: number; price: number}) =>
        (price += item.qty * item.price),
      0,
    );
    setTotalItem(items);
    setTotalPrice(price);
  }, [myCart]);
  return (
    <View style={styles.container}>
      <Header
        leftIcon={'chevron-back'}
        rightIcon={'person-circle-sharp'}
        iconSize={30}
        onLeftIconPress={() => {
          RootNavigation.navigate('root');
        }}
        onRightIconPress={() => {
          RootNavigation.navigate('profile');
        }}
        showLogo={false}
        title={''}
      />

      <View style={styles.titleView}>
        <Text style={styles.title}>My Bag</Text>
        <Text style={styles.subTitle}>Check and Pay your Item</Text>
      </View>

      <FlatList
        data={myCart}
        renderItem={items => {
          return <CartCard itemData={items.item} />;
        }}
      />

      <View style={styles.totalCard}>
        <Text style={styles.totalCardText}>{totalItem} items</Text>
        <Text style={styles.totalCardText}>{`Rs. ${totalPrice}`}</Text>
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
