import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {materials} from 'constant';
import {Header} from 'components';
import styles from './styles';

const Details = ({navigation, route}) => {
  const item = route.params;
  const DataType = item.key;
  const FilteredArray = materials.filter((item) => DataType === item.type)

  return (
    <View style={styles.container}>
       <Header
          leftIcon={'ios-chevron-back'}
          rightIcon={'cart'}
          iconSize={28}
          onLeftIconPress={() => { navigation.navigate('root') }}
          onRightIconPress={() => { navigation.navigate('cart') }}
          showLogo={true}
          title={'Details'}
        /> 

      <FlatList
          numColumns={2}
          data={FilteredArray}
          renderItem={(item) => {
            return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => {
                    navigation.navigate('ItemDetail', item.item);
                  }}
                >
                    <View>
                      <Image source={item.item.img} style={styles.cardImg} />
                    </View>
          
                    <View style={styles.cardBottom}>
                      <Text style={styles.cardText}>{item.item.name}</Text>
                      <Text style={styles.cardPrice}>Rs. {item.item.price}</Text>
                    </View>
                  
                </TouchableOpacity>
            );
          }}
       />
    </View>
  );
};

export default Details;
