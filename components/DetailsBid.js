import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../screens/Home/Home";
import { COLORS, FONTS, SIZES } from "../constants";
import { EthPrice } from "./SubInfo";

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        backgroundColor: "#f5f5f5",
        borderRadius: 15,
        padding: SIZES.base,
      }}
    >
      <View style={styles.container} key={bid.id}>
        <Image source={bid.image} style={styles.image} />
        <View style={styles.bidContainer}>
          <Text style={styles.bidderName}>
            Bid placed by <Text style={{ fontWeight: "600" }}>{bid.name}</Text>
          </Text>
          <Text style={styles.bidDate}>{bid.date}</Text>
        </View>
        <EthPrice price={bid.price} />
      </View>
    </View>
  );
};

export default DetailsBid;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base,
  },
  image: {
    resizeMode: "contain",
    width: 48,
    height: 48,
  },
  bidContainer: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: SIZES.base,

    marginLeft: 20,
  },
  bidderName: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  bidDate: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small - 2,
    color: COLORS.secondary,
    marginTop: 3,
  },
});
