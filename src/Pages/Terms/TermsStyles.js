import {StyleSheet} from 'react-native';
import {BLACK, BRAND, WHITE} from '../../constants/color';

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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contentContainer: {
    flexGrow: 1,
  },
  heading: {
    color: BLACK,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    color: BLACK,
    fontSize: 16,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
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
    paddingVertical: 15,
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
