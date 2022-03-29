import React, {useState, useEffect} from 'react';
import * as RootNavigation from 'services/navigationServices';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {getData} from 'services/apiService';
import {categoryList} from 'constant';
import styles from './styles';

interface IProducts {
  id?: number;
  category?: string;
  description?: string;
  image?: any;
  title?: string;
  price?: number;
  rating?: any;
}

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [isSelected, setIsSelected] = useState(0);

  useEffect(() => {
    getData()
      .then(dataItem => {
        setData(dataItem);
        setFilter(dataItem);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const dataFilter = (cat?: string) => {
    cat === ''
      ? setFilter(data)
      : setFilter(data.filter((x: IProducts) => x.category === cat));
  };

  const SelectedCategory = () => {
    return (
      <FlatList
        data={categoryList}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
        renderItem={item => {
          return (
            <View style={styles.categoryContainer}>
              <TouchableOpacity
                onPress={() => {
                  setIsSelected(item.index);
                  dataFilter(item.item.category);
                }}
                style={[
                  isSelected === item.index
                    ? [styles.subContainer, styles.activeCategory]
                    : styles.subContainer,
                ]}>
                <Text
                  style={[
                    isSelected === item.index
                      ? [styles.textStyling, styles.activeCategoryText]
                      : styles.textStyling,
                  ]}>
                  {item.item.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <View style={styles.container}>
          <SelectedCategory />
        </View>
        <FlatList
          numColumns={2}
          data={filter}
          renderItem={({item}: {item: IProducts}) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => RootNavigation.navigate('ItemDetail', item)}>
                <View>
                  <Image source={{uri: item.image}} style={styles.cardImg} />
                </View>

                <View style={styles.cardBottom}>
                  <Text style={styles.cardText}>
                    {item.title?.substring(0, 12)}
                  </Text>
                  <Text style={styles.cardPrice}>Rs. {item.price}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </>
    );
  };

  return (
    <>
      <ShowProduct />
    </>
  );
};

export default Products;
