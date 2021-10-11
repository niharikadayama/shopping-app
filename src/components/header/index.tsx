import React from "react";
import {View,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";
import { images } from "../../assets/arrays/theme";

const Header = ({icon1,icon2,size,onpress1,onpress2,image}) =>{
    return <View style = {styles.container}>
        <View style={styles.header}>

           <Icon name={icon1} size={size} style= {styles.iconLeft}
            onPress={onpress1}/>

            <Image source={image ? images.logo : null } style={styles.logo}/>
            
            <Icon name={icon2}  size={size} style = {styles.iconRight}
            onPress={onpress2}/>

        </View>
       
    </View>
}
export default Header