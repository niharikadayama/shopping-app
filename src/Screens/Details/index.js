import { NavigationContainer } from "@react-navigation/native";
import React ,{useState} from "react";
import {View,Text,Image, TouchableOpacity,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SearchBar from "../../components/Searchbar";
import styles from "./styles";
import Header from "./Header";
import Woman from "../../components/arrays/woman";

const Details = ({navigation}) =>{
    const Filters = ['POPULAR','CASUAL','ETHNIC','SPORTS']

    const [FilterIndex, setfilterIndex] = useState(0)

    const FilterList = () =>{
        return(
            <View style={styles.filterlist}>
               {Filters.map((item,index)=>(
                   <TouchableOpacity 
                    onPress={()=>setfilterIndex(index)}> 

                    <Text key={index}
                    style={[styles.filterlistText, FilterIndex==index && styles.filterlistTextSelected]}>
                    {item}</Text>

                   </TouchableOpacity>
               ))}
            </View>
        )
    }
    return (
        <View style={styles.container}>
            
            <Header />

            <SearchBar/>

            <FilterList/>
         
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

                        <Icon name="gittip" size={30} style={styles.icon}
                             onPress={()=>{
                              alert('Added to Wishlist')  }}/>

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