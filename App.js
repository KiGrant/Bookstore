import React from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import { SafeAreaView, StyleSheet } from "react-native";
// import BookShelf from "./component/Bookshelf/Bookshelf";
import Nav from "./src/components/Navbar/Navbar";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <Nav />
        {/* <Switch> */}
        {/* <Route exact path="/" component={SearchBooks} /> */}
        {/* <Route exact path="/search" component={SearchBooks} /> */}
        {/* <Route exact path="/Bookshelf" component={Bookshelf} /> */}
        {/* <Route path="/book/:id" component={Book} /> */}
        {/* </Switch> */}
      </NativeRouter>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
