import React, {useState, useEffect} from 'react';
import * as RootNavigation from 'services/navigationServices';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {getData} from 'services/apiService';
// import Loader from '../loader';
import styles from './styles';
// import {LinkNotFound} from '..';

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
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

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

  const filterProduct = cat => {
    const updateList = data.filter((x: IProducts) => x.category === cat);
    setFilter(updateList);
  };

  const ShowProduct = () => {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.subContainer}
            onPress={() => {
              setFilter(data);
            }}>
            <Text style={styles.textStyling}>ALL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.subContainer}
            onPress={() => {
              filterProduct("men's clothing");
            }}>
            <Text style={styles.textStyling}>MEN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.subContainer}
            onPress={() => {
              filterProduct("women's clothing");
            }}>
            <Text style={styles.textStyling}>WOMEN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.subContainer}
            onPress={() => {
              filterProduct('jewelery');
            }}>
            <Text style={styles.textStyling}>JEWELRY</Text>
          </TouchableOpacity>
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
