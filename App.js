import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/screens/Home";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header />
      <Home />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
    // backgroundColor: "#000"
  }
});
