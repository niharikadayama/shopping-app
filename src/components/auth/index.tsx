import React from "react";
import {View,Text,TouchableOpacity,Image,TextInput} from 'react-native'
import { Controller } from "react-hook-form";
import  Icon  from "react-native-vector-icons/Ionicons";
import {images,colors} from 'theme'
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
    placeholder?: string;
    control?:any;
    rules?:any;
    name?:any;
    secureTextEntry?:boolean;
}

const AuthInputContainer = (props: Iauth) =>{
    const {control,name,placeholder,secureTextEntry,rules={}} = props
    return(
            <Controller 
                control={control}
                name={name}
                rules={rules}
                render={({field:{value,onChange,onBlur},fieldState:{error}})=> (
                    <>
                        <View style={[styles.inputField,{borderColor: error ? colors.red : colors.transparentlightBg }]}>
                            <TextInput 
                            value={value} 
                            onChangeText={onChange} 
                            onBlur={onBlur} 
                            placeholder={placeholder} 
                            secureTextEntry={secureTextEntry}
                            />
                        </View>
                        {error && 
                          (<Text style={styles.errorStyle}>{error.message || "Error"}</Text>
                        )}
                    </>
                )}
              />    
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