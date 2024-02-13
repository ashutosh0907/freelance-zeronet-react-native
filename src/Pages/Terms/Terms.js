import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {HEIGHT, MyStatusBar} from '../../constants/config';
import {BLACK, WHITE} from '../../constants/color';
import {appStyles} from '../../styles/AppStyles';
import {Loader} from '../../components/Loader';
import Header from '../../components/Header';
import styles from './TermsStyles';
import {BOLD, MEDIUM} from '../../constants/fontfamily';
import {RFValue} from 'react-native-responsive-fontsize';

const Terms = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleAccept = () => {
    // Handle accept logic
    console.log('User accepted terms');
  };

  const handleDecline = () => {
    // Handle decline logic
    console.log('User declined terms');
  };

  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <SafeAreaView style={appStyles.safeareacontainer}>
        <Loader visible={loader} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Header
              title={''}
              onIconPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <ScrollView
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: 'center',
              paddingBottom: 20, // Adjust padding bottom to ensure space for scrolling
            }}>
            <View
              style={{
                width: '90%',
              }}>
              <Text
                style={{
                  color: BLACK,
                  fontFamily: BOLD,
                  fontSize: RFValue(25),
                }}>
                Terms of Services
              </Text>
              <Text
                style={{
                  color: '#C8C8C8',
                  fontFamily: MEDIUM,
                  fontSize: RFValue(18),
                }}>
                Last Updated on Jan 2024
              </Text>
            </View>
            <View style={{width: '90%'}}>
              <Text style={styles.subHeading}>About</Text>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                non dui sagittis, consectetur libero non, sodales massa. Integer
                sed enim et odio sagittis elementum ut vitae nunc. Maecenas
                consequat, risus et facilisis tincidunt, justo purus ultricies
                enim, id posuere lectus lorem sit amet elit.
              </Text>
              <Text style={styles.heading}>Terms and Conditions</Text>
              <Text style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                non dui sagittis, consectetur libero non, sodales massa. Integer
                sed enim et odio sagittis elementum ut vitae nunc. Maecenas
                consequat, risus et facilisis tincidunt, justo purus ultricies
                enim, id posuere lectus lorem sit amet elit.
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                // backgroundColor: 'red',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 20,
              }}>
              <View style={styles.checkboxContainer}>
                <TouchableOpacity
                  onPress={() => setIsChecked(!isChecked)}
                  style={styles.checkbox}>
                  {isChecked ? <Text>X</Text> : null}
                </TouchableOpacity>
                <Text style={styles.checkboxLabel}>
                  I have read the all terms and conditions
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPressIn={() => {
                    navigation.navigate('Claim');
                  }}
                  style={[styles.button]}
                  onPress={handleAccept}>
                  <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button]}
                  onPress={handleDecline}>
                  <Text style={styles.buttonText}>Decline</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{height: HEIGHT * 0.05}} />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Fragment>
  );
};

export default Terms;

/*

 <Text style={styles.subHeading}>About</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            dui sagittis, consectetur libero non, sodales massa. Integer sed
            enim et odio sagittis elementum ut vitae nunc. Maecenas consequat,
            risus et facilisis tincidunt, justo purus ultricies enim, id posuere
            lectus lorem sit amet elit.
          </Text>
          <Text style={styles.heading}>Terms and Conditions</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            dui sagittis, consectetur libero non, sodales massa. Integer sed
            enim et odio sagittis elementum ut vitae nunc. Maecenas consequat,
            risus et facilisis tincidunt, justo purus ultricies enim, id posuere
            lectus lorem sit amet elit.
          </Text>
*/

/*
<View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
            style={styles.checkbox}>
            {isChecked ? <Text>X</Text> : null}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            I accept the terms and conditions
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button]} onPress={handleAccept}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={handleDecline}>
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
        </View>

*/
