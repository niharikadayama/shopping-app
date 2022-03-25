import React from 'react';
import {
  View,
  ScrollView,
  Button,
  TextInput,
  StyleSheet,
  Text,
  Switch,
} from 'react-native';
import {Field, reduxForm, destroy} from 'redux-form';

const Form = props => {
  const {handleSubmit} = props;

  const onSubmit = values => {};

  const renderInput = ({input: {onChange, ...input}, ...rest}) => {
    return (
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        {...input}
        {...rest}
      />
    );
  };
  const checkboxField = ({input: {onChange, value}}) => {
    return (
      <View>
        <Switch onValueChange={value => onChange(value)} value={value} />
      </View>
    );
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.subContainer}>
        <Text style={styles.subContainerText}>Contact Info</Text>
        <Field
          name={'name'}
          props={{
            placeholder: 'Name',
          }}
          component={renderInput}
        />
        <Field
          name={'phoneNumber'}
          props={{
            placeholder: 'Contact Number',
          }}
          component={renderInput}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subContainerText}>Address Info</Text>
        <View>
          <Field
            name={'pincode'}
            props={{
              placeholder: 'Pincode',
            }}
            component={renderInput}
          />
          <Field
            name={'city'}
            props={{
              placeholder: 'City',
            }}
            component={renderInput}
          />
        </View>
        <Field
          name={'state'}
          props={{
            placeholder: 'State',
          }}
          component={renderInput}
        />
        <Field
          name={'locality'}
          props={{
            placeholder: 'Locality/ Area/ Street',
          }}
          component={renderInput}
        />
        <Field
          name={'flatNo'}
          props={{
            placeholder: 'Flat no/Building Name',
          }}
          component={renderInput}
        />
        <Button title={'Submit'} onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {},
  subContainer: {},
  subContainerText: {},
  input: {
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
  },
});

export default reduxForm({form: 'AddressInfo'})(Form);
