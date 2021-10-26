import React from "react";
import {View,Text,TouchableOpacity,Image,TextInput} from 'react-native'
import  Icon  from "react-native-vector-icons/Ionicons";
import {images} from 'theme'
import styles from './styles'

const AuthHeader = () => {
    return(
        <View style = {styles.logoContainer}>
               <Image source={images.logo}/>
            </View>
    )
}

interface Iauth{
    onPress?: () => void;
    buttonName?: string;
    location?:string;
    question?:string;
    value?: string;
    setValue?: any;
    placeholder?: string;
    secureTextEntry?: boolean;
}

const AuthInputContainer = (props: Iauth) =>{
    const {value,setValue,placeholder,secureTextEntry} = props
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


const AuthButton = (props: Iauth)=>{
    const {onPress,buttonName} = props
    return(
           <TouchableOpacity style={styles.loginButton} onPress={onPress}>
                <Text style={styles.loginButtonText}>{buttonName}</Text>
            </TouchableOpacity> 
    )
}

const AuthBottomCard = (props: Iauth) =>{
    const {question,location,onPress} = props
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

export {AuthBottomCard,AuthHeader,AuthInputContainer,AuthButton}