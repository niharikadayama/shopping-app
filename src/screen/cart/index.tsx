import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {Header, CartCard, Button} from 'components';
import {useSelector} from 'react-redux';

const Cart = ({navigation, route}) => {
  const item = route.params;
  console.log(item);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const myCart = useSelector(state => state.shop.data);

  useEffect(() => {
    let items = myCart.reduce((items, item) => items + item.qty, 0);
    let price = myCart.reduce(
      (price, item) => (price += item.qty * item.price),
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
          navigation.navigate('root');
        }}
        onRightIconPress={() => {
          navigation.navigate('profile');
        }}
        showLogo={false}
        title={''}
      />

      <View style={styles.titleView}>
        <Text style={styles.title}>My Bag</Text>
        <Text style={styles.subTitle}>Check and Pay your Item</Text>
      </View>

      <FlatList
        data={item}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <CartCard itemData={item} />;
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
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default Cart;
