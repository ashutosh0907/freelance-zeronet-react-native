import {StyleSheet} from 'react-native';
import {BLACK, BRAND, WHITE} from '../../constants/color';
import {BOLD, MEDIUM} from '../../constants/fontfamily';
import {RFValue} from 'react-native-responsive-fontsize';
import {HEIGHT} from '../../constants/config';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    color: BLACK,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    color: BLACK,
    fontSize: RFValue(20),
    fontFamily: BOLD,
  },
  contentContainer: {
    flexGrow: 1,
  },
  heading: {
    color: BLACK,
    fontSize: RFValue(20),
    fontFamily: BOLD,
  },
  paragraph: {
    color: BLACK,
    fontSize: RFValue(15),
  },
  checkboxContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxLabel: {
    color: BLACK,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: HEIGHT * 0.015,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: BRAND,
  },
  buttonText: {
    color: WHITE,
    fontSize: 16,
  },
});
