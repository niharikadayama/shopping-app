import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image} from "react-native";


const DATA = [
  {
    id: "1",
    title: "Women",
    image:require("../../assets/images/woman.jpg"),
   
  },
  {
    id: "2",
    title: "Men",
    image:require("../../assets/images/man.jpg")
  },
  {
    id: "3",
    title: "Kids",
    image:require("../../assets/images/Kid.jpg")
  },
  {
    id: "4",
    title: "50% off",
    image:require("../../assets/images/new.jpg")
  },
];


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Image source={item.image} style={styles.image}/>
  </TouchableOpacity>
);

const Category = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#e6a375" : "#efc392";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
            setSelectedId(item.id)
            navigation.navigate('details')
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
       
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    paddingHorizontal:20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight:'500',
    alignSelf:'center',
    paddingLeft:30
  },
  image:{
      width:150,
      height:200,
      
  }
});

export default Category;