import { StyleSheet, Dimensions } from "react-native";
import { COLORS, NFTData } from "../../constants";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nftContainer: {
    flex: 1,
    paddingTop: 20,
  },
  nftList: {
    zIndex: 0,
  },
  bg: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
  topHalf: {
    height: 300,
    backgroundColor: COLORS.primary,
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default styles;
