import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {Header, WishlistCard} from 'components';
import {connect} from 'react-redux';

const Wishlist = ({navigation, route, wishlist}) => {
  const item = route.params;

  return (
    <View style={styles.container}>
      <Header
        leftIcon={'arrow-left'}
        rightIcon={'shopping-cart'}
        size={28}
        onLeftIconPress={() => {
          navigation.navigate('details');
        }}
        onRightIconPress={() => {
          navigation.navigate('cart');
        }}
        image={false}
      />

      <View style={styles.titleView}>
        <Text style={styles.title}>Wishlist</Text>
        <Text style={styles.subTitle}>Buy it before its gone</Text>
      </View>

      {/* {wishlist.map((item) => (
               <WishlistCard key={item.id} items={item} navigation route/>
          ))}   */}
      <FlatList
        data={wishlist}
        renderItem={({item}) => {
          return <WishlistCard key={item.id} items={item} navigation route />;
        }}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    wishlist: state.shop.wishlist,
  };
};
export default connect(mapStateToProps)(Wishlist);
