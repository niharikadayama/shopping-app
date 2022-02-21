import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './styles';

const Products = ({navigation}) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <Text>Loading.......</Text>
      </>
    );
  };

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
                onPress={() => navigation.navigate('ItemDetail', item)}
                key={item.id}>
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
  return <>{loading ? <Loading /> : <ShowProduct />}</>;
};

export default Products;
