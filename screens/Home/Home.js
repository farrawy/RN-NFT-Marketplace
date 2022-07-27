import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from "react-native";
import { COLORS, NFTData } from "../../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../../components";

const { width, height } = Dimensions.get("window");

// import styles
import styles from "./HomeStyles";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <FocusedStatusBar background={COLORS.primary} /> */}
      <StatusBar
        animated={true}
        barStyle={"light-content"}
        translucent={true}
      />

      <View style={styles.nftContainer}>
        <View style={styles.nftList}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View style={styles.bg}>
          <View style={styles.topHalf} />
          <View style={styles.bottomHalf} />
        </View>
      </View>
    </View>
  );
};

export default Home;
