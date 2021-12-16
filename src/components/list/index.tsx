import React, { useRef } from "react";
import { FlatList,View,Image, StyleSheet,Text} from "react-native";
import { categories } from "constant";
import styles from "./styles";
import Animated from "react-native-reanimated"

const data = Object.keys(categories).map((i) => ({
  key: i,
  title: i,
  image: categories[i],
}));

const Tab = ({item}) =>{
  return(
    <View>
       <Text style={styles.tabs}>{item.title}</Text>
    </View>
  )
}

const Tabs=({data,scrollX}) =>{
   return(
     <View style={styles.headers}> 
       <View style = {styles.headerBody}>
         {data.map((item)=>{
           return <Tab key={item.key} item={item}/>
         })}
       </View>
     </View>
   )
}

const Category = ({navigation}) =>{
  const scrollX = useRef(new Animated.Value(0))
  return(
    <Animated.View style={styles.container}>
      <FlatList
      data={data}
      keyExtractor={item=>item.key}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      pagingEnabled
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {x: scrollX}}}],
        {useNativeDriver: true}
      )}
      renderItem = {({item})=>{
        return(
          <View style={styles.subContainer}>
            <Image 
              source={{uri: item.image}}
              style={styles.imageStyle}/>
              <View style={[StyleSheet.absoluteFillObject,{backgroundColor:'rgba(0,0,0,0.3)'}]}/>
          </View>
        )
      }}
      />
      <Tabs scrollX={scrollX} data={data}/>
    </Animated.View>
  )
}

export default Category;