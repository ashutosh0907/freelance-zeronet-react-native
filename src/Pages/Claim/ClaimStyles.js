import {StyleSheet} from 'react-native';
import {BLACK} from '../../constants/color';
import {EXTRABOLD} from '../../constants/fontfamily';
import {RFValue} from 'react-native-responsive-fontsize';

export const claimStyles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: '100%',
  },
  titleText: {
    color: BLACK,
    fontFamily: EXTRABOLD,
    fontSize: RFValue(17),
    textAlign: 'center',
  },
  idText: {
    color: BLACK,
    fontFamily: EXTRABOLD,
    fontSize: RFValue(25),
    textAlign: 'center',
  },
});
