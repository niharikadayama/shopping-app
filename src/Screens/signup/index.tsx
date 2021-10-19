import React from "react";
import {View,Text} from 'react-native'

import styles from './styles'

import {LoginBottomCard,LoginHeader, LoginInputContainer} from "components/login";

const SignUp = ({navigation}) =>{
    return(
       <View style = {styles.container}>

           <LoginHeader />

            <LoginInputContainer 
              title={'Welcome!'} 
              textInput1={'Enter Usernmae'}
              textInput2={'Enter Email'}
              textInput3={'Enter Password'}
              textInput4={'Confirm Password'}
              onPress={()=>navigation.navigate('root')}
              buttonName={'Register'}/>

            <LoginBottomCard onPress={()=>navigation.navigate('login')}
                question={"Already Have An Account?"}
                location={'Login'}
                />
       </View>
    )
}

export default SignUp