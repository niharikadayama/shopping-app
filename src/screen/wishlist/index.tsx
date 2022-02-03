import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {Header, WishlistCard} from 'components';
import {useSelector} from 'react-redux';

const Wishlist = ({navigation, route}) => {
  const item = route.params;
  const wishlist = useSelector((state)=>{
    return state.shop.wishlist
  })
  return (
    <View style={styles.container}>
      <Header
        leftIcon={'ios-chevron-back'}
        rightIcon={'cart'}
        size={28}
        onLeftIconPress={() => {
          navigation.navigate('root');
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

      <FlatList
        data={wishlist}
        renderItem={({item}) => {
          return <WishlistCard key={item.id} items={item} navigation={navigation} route={route} />;
        }}
      />
    </View>
  );
};

export default Wishlist;
