import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
// import { Link } from "react-router-native";
import { AutoGrowTextInput } from "react-native-auto-grow-textinput";

export default class Nav extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.navBar}>
          <AutoGrowTextInput placeholder="Left" />
          <AutoGrowTextInput placeholder="Middle" />
          <AutoGrowTextInput placeholder="Right" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    marginTop: 20
  }
});
