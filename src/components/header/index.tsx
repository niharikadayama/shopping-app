import React from "react";
import {View,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";
import { images } from "theme";

interface Iheader{
    leftIcon: string;
    rightIcon: string;
    size: number;
    image: any;
    onLeftIconPress: () => void;
    onRightIconPress:() => void;
}
const Header = (props: Iheader) =>{
    const {leftIcon,rightIcon,size,onLeftIconPress,onRightIconPress,image} = props
    return <View style = {styles.container}>
        <View style={styles.header}>

           <Icon name={leftIcon} size={size} style= {styles.iconLeft}
            onPress={onLeftIconPress}/>

            <Image source={image ? images.logo : null } style={styles.logo}/>
            
            <Icon name={rightIcon}  size={size} style = {styles.iconRight}
            onPress={onRightIconPress}/>

        </View>
    </View>
}
export default Header