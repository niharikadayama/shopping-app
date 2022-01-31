import React, {useState} from "react";
import {View,Text,TouchableOpacity} from 'react-native';
import { Button } from "components";
import { useForm,Controller } from "react-hook-form";
import styles from './styles'

import {AuthBottomCard,AuthHeader,AuthInputContainer} from "components/auth";

const Login = ({navigation}) =>{

  const {control,handleSubmit} = useForm();
  
  const [state, setState] = useState({
     isLoading: false,
     email: '',
     password: '',
     isSecure: true,
  })

  const {isLoading,email,password,isSecure} = state;

  const updateState = (data) => setState(()=> ({ ...state, ...data}))

  const onSignInPressed = (data) =>{
    navigation.navigate('root',data)
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
                  icon="ios-mail"
                  secureTextEntry={false}
                  onChangeText={(email:any) => updateState({email})}
                  rules={{required:'Username is required'}}
              />
              <AuthInputContainer 
                  name='password'
                  control={control}
                  placeholder='Enter Password'
                  icon="ios-key-sharp"
                  secureTextEntry={true} 
                  onChangeText={(password:any) => updateState({password})}
                  rules={{required:'Password is required',
                        minLength: {value:6,message:'Password should be minimum 6 characters long'}
                  }}
              />

              <Button 
                name = {'Login'} 
                onPress={handleSubmit(onSignInPressed)} 
                theme = {'primary'} 
              />

           </View>

            <TouchableOpacity onPress={onForgetPasswordPressed}>
              <Text style={styles.forgetpassword}>Forget Password??</Text>
            </TouchableOpacity>

            <AuthBottomCard onPress={()=>navigation.navigate('SignUp')}
                question={"Don't Have An Account?"}
                location={'Sign Up'}
                />
       </View>
    )
}

export default Login