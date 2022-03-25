import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Button} from 'components';
import RadioButtonComponenet from './radioButton';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

class Reaction extends React.Component {
  render() {
    return (
      <View style={styles.emojiContainer}>
        <TouchableOpacity>
          <Text style={styles.emoji}>&#128529;</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.emoji}>&#x1F615;</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.emoji}>&#x1F642;</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.emoji}>&#x1F60A;</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.emoji}>&#x1F604;</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <View style={styles.subContainer}>
        <Icon name="close" size={25} style={styles.closeIcon} />
        <Text style={styles.heading}>Give Feedback</Text>
        <Text style={styles.subHeading}>what do you think about NiDa?</Text>
        <Reaction />
        <Text style={styles.subHeading}>
          Do you have any thoughts you'd like to share?
        </Text>
        <TextInput style={styles.feedbackInputBox}></TextInput>
        <Text style={styles.subHeading}>
          May we follow you up on your feedback?
        </Text>
        <RadioButtonComponenet />
        <View style={styles.buttonContainer}>
          <Button name="Send" theme="secondary" />
          <Button name="Clear" theme="tertiary" />
        </View>
      </View>
    );
  }
}

export default Form;
