import React from "react";
import {View,Text} from 'react-native'

import styles from './styles'

import {LoginBottomCard,LoginHeader, LoginInputContainer} from "components/login";

const Login = ({navigation}) =>{
    return(
       <View style = {styles.container}>

           <LoginHeader />

            <LoginInputContainer 
              title={'Welcome Back!'} 
              textInput1={'Enter Email'}
              textInput2={'Enter Password'}
              textInput3= {null}
              textInput4={null}
              onPress={()=>navigation.navigate('root')}
              buttonName={'Login'}/>

            <Text style={styles.forgetpassword}>Forget Password??</Text>

            <LoginBottomCard onPress={()=>navigation.navigate('signup')}
                question={"Don't Have An Account?"}
                location={'Sign Up'}
                />
       </View>
    )
}

export default Login