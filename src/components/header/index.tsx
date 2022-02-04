import React from "react";
import {View,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import { Images } from "theme";

interface Iheader{
    leftIcon: string;
    rightIcon: string;
    heading?: string;
    size?: number;
    image?: boolean;
    onLeftIconPress?: () => void;
    onRightIconPress?:() => void;
}
const Header = (props: Iheader) =>{
    const {leftIcon,rightIcon,heading,size,onLeftIconPress,onRightIconPress,image} = props

    const logoPresent= ()=>{
        if(image)
           return <Image source={ Images.logo } style={styles.logo}/>;
        return <Text style={styles.heading}>{heading}</Text>;
     }

    return <View style = {styles.container}>
        <View style={styles.headerSection}>

           <Icon name={leftIcon} size={size} style= {styles.iconLeft}
            onPress={onLeftIconPress}/>
            
            {logoPresent()}

            <Icon name={rightIcon}  size={size} style = {styles.iconRight}
            onPress={onRightIconPress}/>

        </View>
    </View>
}
export default Header