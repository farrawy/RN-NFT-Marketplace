import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";
const HomeHeader = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerHeader}>
        <Image source={assets.logo} style={styles.logo} />

        <View style={styles.profile}>
          <Image source={assets.person01} style={styles.avatar} />
          <Image source={assets.badge} style={styles.badge} />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text style={styles.welcomeHeader}>Hello, Ahmed 👋 </Text>
        <Text style={styles.welcomeSubtitle}>Let's find a masterpiece</Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={styles.searchBar}>
          <Image source={assets.search} style={styles.searchImg} />
          <TextInput
            placeholder="Search NFTs"
            style={{ flex: 1 }}
            onChangeText={onSearch}
            placeholderTextColor={COLORS.white}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
  },
  innerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: "50%",
    height: 70,
  },
  profile: {
    width: 45,
    height: 45,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  badge: {
    position: "absolute",
    width: 15,
    height: 15,
    bottom: 0,
    right: 0,
  },
  welcomeHeader: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  welcomeSubtitle: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
    marginTop: SIZES.base / 2,
  },
  searchImg: {
    resizeMode: "contain",
    width: 20,
    height: 20,
    marginRight: SIZES.base,
  },
  searchBar: {
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },
});
