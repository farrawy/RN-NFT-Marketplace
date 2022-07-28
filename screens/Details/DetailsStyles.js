import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  button: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingVertical: SIZES.extraLarge,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    zIndex: 1,
  },
});

export default styles;
