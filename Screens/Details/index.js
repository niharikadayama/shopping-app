import { NavigationContainer } from "@react-navigation/native";
import React ,{useState} from "react";
import {View,Text,Image,Button, TextInput, TouchableOpacity,FlatList,Dimensions} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from "./styles";

const Woman = [
    {
        id:1,
        name: 'Indya Kurti',
        price: '1600',
        like: false, 
        img: require('../../assets/woman/w1.jpg'),
        info: 'Blue mirror Work kurti'
       
    },
    {
        id:2,
        name: 'Crop Top',
        price: '600',
        like: false,
        img: require('../../assets/woman/w2.jpg'),
        info: 'Black knotted crop top'

    },
    {
        id:3,
        name: 'Stripped top',
        price: '700',
        like: false,
        img: require('../../assets/woman/w3.jpg'),
        info: 'White top with yellow and grey Strips'

    },
    {
        id:4,
        name: 'Roadstar ',
        price: '1200',
        like: false,
        img: require('../../assets/woman/w4.jpg'),
        info: 'Slim fit orange top with checked woollen skirt'

    },
    {
        id:5,
        name: 'Asthetic shirt',
        price: '800',
        like: false,
        img: require('../../assets/woman/w5.jpg'),
        info: 'Abstract color cool shirt with half-sleeves'

    },
    {
        id:6,
        name: 'White Frock',
        price: '900',
        like: false,
        img: require('../../assets/woman/w6.jpg'),
        info: 'White knee length umbrella frock'

    }
]


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
            <View style={styles.subContainer}>

                <Icon name="arrow-left" size={30} color={'#ce8f86'}
                onPress={()=>navigation.navigate('Home')}/>

                <Icon name="shopping-cart" size={35} color={'#ce8f86'}
                onPress={()=>navigation.navigate('cart')}/>

            </View>
            <Image 
                source={require('../../assets/images/Nida.png')}
                style={styles.logo}/>
            
            <View style={{marginTop:20,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={20} style={{marginLeft:20}}/>
                    <TextInput placeholder="Search" style={styles.input}/>
                </View>
                <View style={styles.SortBtn}>
                    <Icon name="align-left" size={30} color={'#e6a375'}/>
                </View>
            </View>
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

                        <Icon name="heart" size={20} style={styles.icon}
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