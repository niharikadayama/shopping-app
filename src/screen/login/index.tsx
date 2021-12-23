import React, {useState} from "react";
import {View,Text,TouchableOpacity} from 'react-native'
import { useForm,Controller } from "react-hook-form";
import styles from './styles'

import {AuthBottomCard,AuthHeader,AuthInputContainer,AuthButton} from "components/auth";


const Login = ({navigation}) =>{
  
  const {control,handleSubmit} = useForm();

  const onSignInPressed = (data) =>{
    console.log(data)
    navigation.navigate('root')
  }

  const onForgetPasswordPressed = () =>{
     console.warn('Change password')
  }

    return(
       <View style = {styles.container}>

           <AuthHeader />

           <View style= {styles.inputContainer}>

              <Text style= {styles.inputTitle}>Welcome Back,</Text> 
             
              <AuthInputContainer 
                  name='username'
                  control={control}
                  placeholder="Enter Username"
                  secureTextEntry={false}
                  rules={{required:'Username is required'}}
              />
              <AuthInputContainer 
                  name='password'
                  control={control}
                  placeholder='Enter Password'
                  secureTextEntry={true} 
                  rules={{required:'Password is required',
                        minLength: {value:6,message:'Password should be minimum 6 characters long'}
                  }}
              />

              <AuthButton onPress={handleSubmit(onSignInPressed)} buttonName={'Login'} />
           </View>

            <TouchableOpacity onPress={onForgetPasswordPressed}>
              <Text style={styles.forgetpassword}>Forget Password??</Text>
            </TouchableOpacity>

            <AuthBottomCard onPress={()=>navigation.navigate('signup')}
                question={"Don't Have An Account?"}
                location={'Sign Up'}
                />
       </View>
    )
}

export default Login