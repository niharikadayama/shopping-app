import React, {useState} from "react";
import {View,Text} from 'react-native'

import styles from './styles'

import {AuthBottomCard,AuthHeader,AuthInputContainer,AuthButton} from "components/auth";

const SignUp = ({navigation}) =>{
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onSignUpPressed = () =>{

  }

    return(
       <View style = {styles.container}>

           <AuthHeader />
           
           <View style= {styles.inputContainer}>

              <Text style= {styles.inputTitle}>Welcome!</Text> 

              <AuthInputContainer placeholder={'Enter Username'} value={username} setValue={setUsername} secureTextEntry={false}/>
              <AuthInputContainer placeholder={'Enter Email'} value={email} setValue={setEmail} secureTextEntry={false}/>
              <AuthInputContainer placeholder={'Enter Password'} value={password} setValue={setPassword} secureTextEntry={true}/>
              <AuthInputContainer placeholder={'Confirm Password'} value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true}/>

              <AuthButton onPress={onSignUpPressed} buttonName={'Register'} />
           </View>
            

            <AuthBottomCard onPress={()=>navigation.navigate('login')}
                question={"Already Have An Account?"}
                location={'Login'}
                />
       </View>
    )
}

export default SignUp