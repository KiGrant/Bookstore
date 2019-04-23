import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { Link } from "react-router-native";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#167FFB"
  },
  link: {
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  text: {
    fontSize: 20,
    color: "red"
  }
};

function NavBar() {
  console.log(styles.text);
  return (
    <View style={styles.container}>
      <Link to="/" style={styles.link}>
        <Text style={styles.text}>My BookShelf</Text>
      </Link>
      <Link to="/Bookshelf" style={styles.link}>
        <Text style={styles.text}>Search</Text>
      </Link>
    </View>
  );
}

export default NavBar;
