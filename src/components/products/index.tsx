import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import Loader from '../loader';
import styles from './styles';

const Products = ({navigation}) => {
  const URL = 'https://fakestoreapi.com/products';
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(URL)
      .then(response => response.data)
      .then(data => {
        setData(data);
        setFilter(data);
        setLoading(false);
      });
    return () => {};
  }, []);

  const filterProduct = cat => {
    const updateList = data.filter(x => x.category === cat);
    setFilter(updateList);
  };

  const ShowProduct = () => {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.subContainer}
            onPress={() => setFilter(data)}>
            <Text style={styles.textStyling}>ALL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.subContainer}
            onPress={() => filterProduct("men's clothing")}>
            <Text style={styles.textStyling}>MEN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.subContainer}
            onPress={() => filterProduct("women's clothing")}>
            <Text style={styles.textStyling}>WOMEN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.subContainer}
            onPress={() => filterProduct('jewelery')}>
            <Text style={styles.textStyling}>JEWELERY</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          numColumns={2}
          data={filter}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('ItemDetail', item)}>
                <View>
                  <Image source={{uri: item.image}} style={styles.cardImg} />
                </View>

                <View style={styles.cardBottom}>
                  <Text style={styles.cardText}>
                    {item.title.substring(0, 12)}
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
  return <>{loading ? <Loader /> : <ShowProduct />}</>;
};

export default Products;
