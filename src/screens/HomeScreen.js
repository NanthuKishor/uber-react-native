import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Text>This is Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
