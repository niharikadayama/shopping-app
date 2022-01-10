import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {View,Text,TouchableOpacity,ImageBackground} from 'react-native'

import  Icon  from "react-native-vector-icons/Ionicons";
import {Images} from 'theme'
import styles from './styles'

const Stack = createStackNavigator();

const Splash = ({navigation}) =>{

  

    return(
       <View>
          <ImageBackground source={Images.splashBg} 
           style={styles.bgStyle}>
            
          <View style = {styles.cardContainer}>
              <Text style = {styles.cardTitle}>
                  Be Your Own Stylist
              </Text>
              <Text style = {styles.cardSubTitle}>
                 Its Not about The Brand, Let Your Style Define You
              </Text>
              <TouchableOpacity onPress={()=>{navigation.navigate('login')}}
              style={styles.cardButton}>
                  <Text style={styles.cardButtonTitle}>Get Started</Text>
                  <Icon name={'ios-arrow-forward-circle'} style={styles.cardButtonIcon}/>
              </TouchableOpacity>
          </View>

           </ImageBackground>
       </View>
    )
}

export default Splash

