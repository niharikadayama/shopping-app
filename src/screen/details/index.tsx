import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {materials} from 'constant';
import {Header} from 'components';
import styles from './styles';

const Details = ({navigation, route}) => {
  const item = route.params;
  const DataType = item.key;
  const FlatlistItem = ({item}) => {
    if (DataType === item.type) {
      return (
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            navigation.navigate('ItemDetail', item);
          }}>
          <View>
            <Image source={item.img} style={styles.cardImg} />
          </View>

          <View style={styles.cardBottom}>
            <Text style={styles.cardText}>{item.name}</Text>
            <Text style={styles.cardPrice}>Rs. {item.price}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return <></>;
    }
  };
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
        image={true}
        heading={'Details'}
      />

      <FlatList
        numColumns={2}
        data={materials}
        renderItem={({item}) => {
          return <FlatlistItem item={item} />;
        }}
      />
    </View>
  );
};

export default Details;
