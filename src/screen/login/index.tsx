import React, {useState} from "react";
import {View,Text,TouchableOpacity} from 'react-native'

import styles from './styles'

import {AuthBottomCard,AuthHeader,AuthInputContainer,AuthButton} from "components/auth";


const Login = ({navigation}) =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () =>{
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

              <AuthInputContainer placeholder={'Enter Username'} value={username} setValue={setUsername} secureTextEntry={false}/>
              <AuthInputContainer placeholder={'Enter Password'} value={password} setValue={setPassword} secureTextEntry={true}/>

              <AuthButton onPress={onSignInPressed} buttonName={'Login'} />
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