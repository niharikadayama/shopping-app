import { NavigationContainer } from "@react-navigation/native";
import React ,{useState,useContext} from "react";
import {View,Text,Image, TouchableOpacity,FlatList} from 'react-native'
import { ItemContext } from "context/itemContext";
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar,FilterList,Header} from "components"
import styles from "./styles";


const Details = ({navigation}) =>{
    const [data,setdata] = useContext(ItemContext)

    const [FilterIndex, setfilterIndex] = useState(0)
    return (
        <View style={styles.container}>
            
            <Header leftIcon ={"arrow-left"} rightIcon ={"shopping-cart"} size={28}
                onLeftIconPress ={()=>{ navigation.navigate('Home') }}
                onRightIconPress ={()=>{ navigation.navigate('cart') }}
                image= {true} />

            <SearchBar/>

            <FilterList onPress={()=>setfilterIndex(0)}/>
         
            <FlatList 
            numColumns={2}
            data={data}
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

                        <Icon name="gittip" size={30} style={styles.icon} 
                         />

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