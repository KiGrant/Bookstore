import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button
} from "react-native";


export default class SearchBar extends Component {
  
  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        value={this.state.userInput}
        onChangeText={this.filter}
        autoCorrect={false}
      />
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%'
        }}
      />
    );
  };

  render() {
    const { searchInput, isLoading, users } = this.props.state;
  
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
