import React from "react";
import {View,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";
import { Images } from "theme";

interface header{
    leftIcon: string;
    rightIcon: string;
    size: number;
    image: boolean;
    onLeftIconPress: () => void;
    onRightIconPress:() => void;
}
const Header = (props: header) =>{
    const {leftIcon,rightIcon,size,onLeftIconPress,onRightIconPress,image} = props

    const logoPresent= ()=>{
        if(image)
           return <Image source={ Images.logo } style={styles.logo}/>;
        return null;
     }

    return <View style = {styles.container}>
        <View style={styles.header}>

           <Icon name={leftIcon} size={size} style= {styles.iconLeft}
            onPress={onLeftIconPress}/>
            
            {logoPresent()}

            <Icon name={rightIcon}  size={size} style = {styles.iconRight}
            onPress={onRightIconPress}/>

        </View>
    </View>
}
export default Header