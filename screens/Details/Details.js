import React from "react";
import { Text, View, Image, FlatList, StatusBar } from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  DetailsDesc,
  DetailsBid,
  FocusedStatusBar,
} from "../../components";

// import styles
import styles from "./DetailsStyles";
import { focusProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const Details = ({ route, navigation }) => {
  const data = route.params;
  console.log(data);
  return (
    <View style={styles.container}>
      <StatusBar animated={true} barStyle={"dark-content"} translucent={true} />
      <View>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
    </View>
  );
};

export default Details;
