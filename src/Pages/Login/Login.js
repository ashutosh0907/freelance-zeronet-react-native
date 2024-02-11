/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {BLACK, WHITE} from '../../constants/color';
import CustomButton from '../../components/CustomButton';
import {loginStyles} from './LoginStyles';
import {HEIGHT, WIDTH} from '../../constants/config';
import {LOGO} from '../../constants/imagepath';
import {CustomTextInput} from '../../components/CustomTextInput';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: WHITE}}>
      <View style={loginStyles.imageContainer}>
        <Image source={LOGO} resizeMode="contain" style={loginStyles.image} />
      </View>
      <View style={loginStyles.logincontainer}>
        <View style={loginStyles.loginheader}>
          <Text
            style={{
              ...loginStyles.msgtext,
            }}>
            Log in
          </Text>
        </View>
        <View style={loginStyles.credentialView}>
          <CustomTextInput
            title="Email"
            placeholder="Enter your email"
            width={WIDTH * 0.85}
          />
        </View>
        <View style={loginStyles.credentialView}>
          <CustomTextInput
            title="Password"
            placeholder="Enter your Password"
            width={WIDTH * 0.85}
          />
        </View>
      </View>
      <CustomButton
        onPress={() => navigation.navigate('Claim')}
        title={'Login'}
        width={WIDTH * 0.7}
      />
    </View>
  );
};

export default Login;
