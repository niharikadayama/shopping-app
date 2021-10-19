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

const LoginInputContainer = ({title,textInput1,textInput2,textInput3,textInput4,buttonName,onPress}) =>{
    
        if(buttonName === 'Login'){
            return(
            
                <View style= {styles.inputContainer}>
        
                    <Text style= {styles.inputTitle}>{title}</Text>
                    
                   
                    <TextInput style= {styles.inputField} placeholder={textInput1}></TextInput>
                    <TextInput style= {styles.inputField} placeholder={textInput2}></TextInput>
        
                    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
                        <Text style={styles.loginButtonText}>{buttonName}</Text>
                    </TouchableOpacity>   
                        
                </View>
            )        
        }else if(buttonName === 'Register'){
            return(
                    <View style= {styles.inputContainer}>
            
                        <Text style= {styles.inputTitle}>{title}</Text>
                        
                       
                        <TextInput style= {styles.inputField} placeholder={textInput1}></TextInput>
                        <TextInput style= {styles.inputField} placeholder={textInput2}></TextInput>
                        <TextInput style= {styles.inputField} placeholder={textInput3}></TextInput>
                        <TextInput style= {styles.inputField} placeholder={textInput4}></TextInput>
            
                        <TouchableOpacity style={styles.loginButton} onPress={onPress}>
                            <Text style={styles.loginButtonText}>{buttonName}</Text>
                        </TouchableOpacity>   
                            
                    </View>
            )
        }
    
    
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

export {LoginBottomCard,LoginHeader,LoginInputContainer}