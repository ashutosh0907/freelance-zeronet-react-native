import {View, Text} from 'react-native';
import React from 'react';
import {BLACK} from '../../constants/color';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        onPress={() => {
          navigation.navigate('Claim');
        }}
        style={{color: BLACK}}>
        Login
      </Text>
    </View>
  );
};

export default Login;
