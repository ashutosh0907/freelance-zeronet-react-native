import { StyleSheet } from "react-native";
import { BLACK, LIGHTGRAY, WHITE } from "../../constants/color";
import { BOLD, MEDIUM } from "../../constants/fontfamily";
import { RFValue } from "react-native-responsive-fontsize";
import { HEIGHT, WIDTH } from "../../constants/config";
export const loginStyles = StyleSheet.create({
  safeareacontainer: {
    height: "100%",
    width: "100%",
    backgroundColor: WHITE,
  },
  maincontainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
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
    width: "90%",
    justifyContent: "center",
    paddingTop: HEIGHT * 0.07,
    paddingBottom: HEIGHT * 0.05,
    alignSelf: "center",
  },
  msgtext: {
    color: BLACK,
    fontFamily: BOLD,
    fontSize: RFValue(25),
    textAlign: "left",
  },
  btn: {
    position: "absolute",
    bottom: 25,
  },
});
