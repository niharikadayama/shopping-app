import React from 'react';
import {View, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import {Button} from 'components';
import {EmailRegex} from 'constant';
import styles from './styles';

import {AuthBottomCard, AuthHeader, AuthInputContainer} from 'components/auth';

const SignUp = ({navigation}) => {
  const {control, handleSubmit, watch} = useForm();
  const pswd = watch('password');
  const onSignUpPressed = () => {};

  return (
    <View style={styles.container}>
      <AuthHeader />

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Welcome!</Text>

        <AuthInputContainer
          name="username"
          control={control}
          placeholder="Enter Username"
          icon="person"
          secureTextEntry={false}
          rules={{required: 'Username is required'}}
        />
        <AuthInputContainer
          name="email"
          control={control}
          placeholder="Enter Email"
          icon="mail"
          secureTextEntry={false}
          rules={{
            pattern: {value: EmailRegex, message: 'Email is invalid'},
          }}
        />
        <AuthInputContainer
          name="password"
          control={control}
          placeholder="Enter Password"
          icon="key-sharp"
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />
        <AuthInputContainer
          name="confirmPassword"
          control={control}
          placeholder="Confirm Password"
          icon="key-sharp"
          secureTextEntry={true}
          rules={{
            validate: value => value === pswd || 'password does not match',
          }}
        />

        <Button
          name={'Register'}
          onPress={handleSubmit(onSignUpPressed)}
          theme={'primary'}
        />
      </View>

      <AuthBottomCard
        onPress={() => navigation.navigate('Login')}
        question={'Already Have An Account?'}
        location={'Login'}
      />
    </View>
  );
};

export default SignUp;
