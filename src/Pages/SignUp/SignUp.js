// SignUp.js

import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  BackHandler,
} from 'react-native';
import {MyStatusBar} from '../../constants/config';
import {WHITE} from '../../constants/color';
import CustomButton from '../../components/CustomButton';
import {CustomTextInput} from '../../components/CustomTextInput';
import styles from './SignUpStyles'; // Import styles from SignUpStyles
import {LOGO} from '../../constants/imagepath';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Your sign up logic here
    console.log('Signing up with:', name, email, password);
  };

  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.logoContainer}>
              <Image
                source={LOGO} // Replace with your logo
                resizeMode="contain"
                style={styles.logo}
              />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.header}>Create Account</Text>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Name</Text>
                <CustomTextInput
                  placeholder="Enter your name"
                  value={name}
                  onChangeText={setName}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <CustomTextInput
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <CustomTextInput
                  placeholder="Enter your password"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
              <CustomButton
                title="Sign Up"
                onPress={handleSignUp}
                style={styles.button}
              />
              <View style={styles.loginLinkContainer}>
                <Text style={styles.loginLinkText}>
                  Already have an account?{' '}
                </Text>
                <Text
                  style={styles.loginLinkText}
                  onPress={() => navigation.navigate('Login')}>
                  Log In
                </Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Fragment>
  );
};

export default SignUp;
