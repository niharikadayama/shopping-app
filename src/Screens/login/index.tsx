import React, {useState} from "react";
import {View,Text,TouchableOpacity} from 'react-native'

import styles from './styles'

import {LoginBottomCard,LoginHeader, LoginInputContainer, LoginButton} from "components/login";


const Login = ({navigation}) =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () =>{
    console.warn('signin')
  }

  const onForgetPasswordPressed = () =>{
     console.warn('Change password')
  }

    return(
       <View style = {styles.container}>

           <LoginHeader />

           <View style= {styles.inputContainer}>

              <Text style= {styles.inputTitle}>Welcome Back,</Text> 

              <LoginInputContainer placeholder={'Enter Username'} value={username} setValue={setUsername} secureTextEntry={false}/>
              <LoginInputContainer placeholder={'Enter Password'} value={password} setValue={setPassword} secureTextEntry={true}/>

              <LoginButton onPress={onSignInPressed} buttonName={'Login'} />
           </View>

            <TouchableOpacity onPress={onForgetPasswordPressed}>
              <Text style={styles.forgetpassword}>Forget Password??</Text>
            </TouchableOpacity>

            <LoginBottomCard onPress={()=>navigation.navigate('signup')}
                question={"Don't Have An Account?"}
                location={'Sign Up'}
                />
       </View>
    )
}

export default Login