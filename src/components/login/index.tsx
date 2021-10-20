import React from "react";
import {View,Text,TouchableOpacity,Image,TextInput} from 'react-native'
import  Icon  from "react-native-vector-icons/Ionicons";
import {images} from 'theme'
import styles from './styles'

const LoginHeader = () => {
    return(
        <View style = {styles.logoContainer}>
               <Image source={images.logo}/>
            </View>
    )
}


const LoginInputContainer = ({value,setValue,placeholder,secureTextEntry}) =>{
    return(
        <View>
             
            <TextInput 
                value={value}
                onChangeText={setValue} 
                placeholder={placeholder}
                style= {styles.inputField}
                secureTextEntry={secureTextEntry}>
            </TextInput>     
        </View>
    ) 
}

const LoginButton = ({onPress,buttonName})=>{
    return(
           <TouchableOpacity style={styles.loginButton} onPress={onPress}>
                <Text style={styles.loginButtonText}>{buttonName}</Text>
            </TouchableOpacity> 
    )
}

const LoginBottomCard = ({question,location,onPress}) =>{
    return(
        <View style={styles.BottomContainer}>
                <View style={styles.Container1}>
                    <TouchableOpacity style={styles.OtherLoginButton}>
                        <Icon name='logo-google' style={styles.OtherIcon}/>
                        <Text style={styles.IconText}>Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.OtherLoginButton}>
                        <Icon name='logo-facebook' style={styles.OtherIcon}/>
                        <Text style={styles.IconText}>Facebook</Text>
                    </TouchableOpacity>   
                </View>

                <View style={styles.Container2}>
                    <Text style={styles.Container2Text1}>{question}</Text>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={styles.Container2Text2}>{location}</Text>
                    </TouchableOpacity>
                </View>
        </View>        
    )
}

export {LoginBottomCard,LoginHeader,LoginInputContainer,LoginButton}