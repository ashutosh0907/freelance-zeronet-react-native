import { StatusBar, StyleSheet } from "react-native";
import { BLACK, BRAND, BROWN, WHITE } from "../../constants/color";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { BOLD, LIGHT, REGULAR, SEMIBOLD } from "../../constants/fontfamily";
import { HEIGHT, WIDTH } from "../../constants/config";
export const headerStyles = StyleSheet.create({
  headercontainer: {
    marginTop: StatusBar.currentHeight,
    flexDirection: "row",
    width: "100%",
    height: 55,
    alignItems: "center",
    backgroundColor: WHITE,
  },
  iconview: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: WIDTH * 0.06,
    height: HEIGHT * 0.2,
  },
  headertextview: {
    width: "70%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: BLACK,
    fontSize: RFValue(14),
    fontFamily: SEMIBOLD,
  },
  skiptext: {
    color: "#ED1B2F",
    fontSize: RFValue(14),
    fontFamily: REGULAR,
  },
  skipview: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
