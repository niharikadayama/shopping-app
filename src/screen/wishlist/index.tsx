import React from 'react';
import * as RootNavigation from 'services/navigationServices';
import {View, Text, FlatList} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import {Header, WishlistCard} from 'components';
import {useSelector} from 'react-redux';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist.wishlist);
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <Header
        leftIcon={'ios-chevron-back'}
        rightIcon={'cart'}
        iconSize={28}
        onLeftIconPress={() => {
          RootNavigation.pop();
        }}
        onRightIconPress={() => {
          RootNavigation.navigate('cart');
        }}
        showLogo={false}
      />
      <View style={styles.titleView}>
        <Text style={[styles.title, {color: colors.text}]}>Wishlist</Text>
        <Text style={[styles.subTitle, {color: colors.text}]}>
          Buy it before its gone
        </Text>
      </View>
      <FlatList
        data={wishlist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <WishlistCard items={item} />;
        }}
      />
    </View>
  );
};

export default Wishlist;
