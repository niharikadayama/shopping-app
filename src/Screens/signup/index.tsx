import React, {useState} from "react";
import {View,Text} from 'react-native'

import styles from './styles'

import {LoginBottomCard,LoginHeader, LoginInputContainer,LoginButton} from "components/login";

const SignUp = ({navigation}) =>{
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onSignUpPressed = () =>{

  }

    return(
       <View style = {styles.container}>

           <LoginHeader />
           
           <View style= {styles.inputContainer}>

              <Text style= {styles.inputTitle}>Welcome!</Text> 

              <LoginInputContainer placeholder={'Enter Username'} value={username} setValue={setUsername} secureTextEntry={false}/>
              <LoginInputContainer placeholder={'Enter Email'} value={email} setValue={setEmail} secureTextEntry={false}/>
              <LoginInputContainer placeholder={'Enter Password'} value={password} setValue={setPassword} secureTextEntry={true}/>
              <LoginInputContainer placeholder={'Confirm Password'} value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true}/>

              <LoginButton onPress={onSignUpPressed} buttonName={'Register'} />
           </View>
            

            <LoginBottomCard onPress={()=>navigation.navigate('login')}
                question={"Already Have An Account?"}
                location={'Login'}
                />
       </View>
    )
}

export default SignUp