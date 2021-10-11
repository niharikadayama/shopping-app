import { NavigationContainer } from "@react-navigation/native";
import React ,{useState} from "react";
import {View,Text,Image, TouchableOpacity,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SearchBar from "../../components/searchBar";
import styles from "./styles";
import FilterList from "../../components/filterList"
import Header from "../../components/header"
import {Woman} from "../../assets/arrays/data";

const Details = ({navigation}) =>{
    const [FilterIndex, setfilterIndex] = useState(0)
    return (
        <View style={styles.container}>
            
            <Header icon1={"arrow-left"} icon2={"shopping-cart"} size={28}
                onpress1 ={()=>{ navigation.navigate('Home') }}
                onpress2 ={()=>{ navigation.navigate('cart') }}
                image= {true} />

            <SearchBar/>

            <FilterList onPress={()=>setfilterIndex(0)}/>
         
            <FlatList 
            numColumns={2}
            data={Woman}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity style={styles.card} 
                          onPress={()=>{
                              navigation.navigate('ItemDetail',{item})
                          }}
                    >

                        <View > 
                           <Image source={item.img} style={styles.cardImg}/>
                        </View>

                        <Icon name="gittip" size={30} style={styles.icon}/>

                        <View style={styles.cardBottom}>
                            <Text style={styles.cardText}>{item.name}</Text>
                            <Text style={styles.cardPrice}>Rs. {item.price}</Text>  
                        </View>

                    </TouchableOpacity>
                )
            }

            }/>
            
        </View>
    )
}


export default Details