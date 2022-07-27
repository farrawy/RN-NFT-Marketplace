import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

//! Butttons
import { CircleButton, RectButton } from "./Button";

//! Constants
import { COLORS, SIZES, SHADOWS, assets } from "../constants";

//! Info
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

const { width, height } = Dimensions.get("window");

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={data.image} style={styles.image} />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  card: {
    width: "100%",
    height: 250,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
});
