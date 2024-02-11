/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {BLACK, BRAND, LIGHTGRAY, WHITE} from '../../constants/color';
import {BOLD, MEDIUM} from '../../constants/fontfamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {HEIGHT, WIDTH} from '../../constants/config';
export const loginStyles = StyleSheet.create({
  safeareacontainer: {
    height: '100%',
    width: '100%',
    backgroundColor: WHITE,
  },
  maincontainer: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: RFValue(12),
    color: BLACK,
  },
  verificationText: {
    fontFamily: MEDIUM,
    color: LIGHTGRAY,
    paddingLeft: 5,
    paddingTop: 5,
    fontSize: RFValue(11.8),
  },
  msgcontainer: {
    width: '90%',
    justifyContent: 'center',
    paddingTop: HEIGHT * 0.07,
    paddingBottom: HEIGHT * 0.05,
    alignSelf: 'center',
  },
  logincontainer: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.5,
  },
  loginheader: {
    marginTop: HEIGHT * 0.01,
    width: WIDTH * 0.8,
    alignSelf: 'center',
    height: HEIGHT * 0.1,
  },
  msgtext: {
    fontWeight: 'bold',

    color: BLACK,
    fontFamily: BOLD,
    fontSize: RFValue(25),
    textAlign: 'left',
  },
  btn: {
    width: WIDTH * 0.5,
    // position: 'absolute',
    // bottom: 25,
  },
  imageContainer: {
    marginTop: HEIGHT * 0.1,
    height: WIDTH * 0.2,
    alignSelf: 'center',
  },
  image: {
    width: WIDTH * 0.28,
    height: WIDTH * 0.2,
    tintColor: BRAND,
  },
  credentialView: {
    marginTop: HEIGHT * 0.01,
    marginLeft: HEIGHT * 0.02,
  },
});
