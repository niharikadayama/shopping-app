import React from "react";
import {View,Text,TextInput} from 'react-native';
import Icon  from "react-native-vector-icons/Ionicons";
import { Button } from "components";
import styles from './styles';

const Feedback = () =>{
    return (
        <View style={styles.container}>
           <Icon name='Close' size={25} style={styles.closeIcon}/>
           <Text style={styles.heading}>Give Feedback</Text>
           <Text style={styles.subHeading}>what do you think about NiDa?</Text>
           <Text style={styles.subHeading}>Do you have any thoughts you'd like to share?</Text>
           <TextInput style={styles.feedbackInputBox}></TextInput>
           <Text style={styles.subHeading}>May we follow you up on your feedback?</Text>
        </View>
    )
}

export default Feedback;