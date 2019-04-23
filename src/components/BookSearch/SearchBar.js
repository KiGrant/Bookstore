import React, { Component } from "react";
import axios from "axios"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button
} from "react-native";


export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.container}>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Bookheader: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
    marginTop: 20
  }
});
