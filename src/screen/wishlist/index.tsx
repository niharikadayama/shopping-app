import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {Header, WishlistCard} from 'components';
import {useSelector} from 'react-redux';

const Wishlist = ({navigation, route}) => {
  const item = route.params;
  const wishlist = useSelector(state => state.shop.wishlist);
  return (
    <View style={styles.container}>
      <Header
        leftIcon={'ios-chevron-back'}
        rightIcon={'cart'}
        iconSize={28}
        onLeftIconPress={() => {
          navigation.navigate('root');
        }}
        onRightIconPress={() => {
          navigation.navigate('cart');
        }}
        showLogo={false}
      />
      <View style={styles.titleView}>
        <Text style={styles.title}>Wishlist</Text>
        <Text style={styles.subTitle}>Buy it before its gone</Text>
      </View>
      {/* <FlatList
        data={wishlist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={item => {
          console.log(item);
          return <WishlistCard items={item} />;
        }}
      /> */}
      <WishlistCard items={item} navigation={navigation} />
    </View>
  );
};

export default Wishlist;
