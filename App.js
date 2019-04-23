import react from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import BookShelf from "../bookstore/src/components/Bookshelf/Bookshelf";
import NavBar from "../bookstore/src/components/Navbar/Navbar";
import BookSearch from "../bookstore/src/components/BookSearch/BookSearch";
// import Book from "../bookstore/src/components/Book/Book"

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        <NavBar />
        <BookSearch />
          <Route exact path="/" component={BookSearch} />
          {/* <Route exact path="/search" component={BookSearch} /> */}
          {/* <Route exact path="/Bookshelf" component={Bookshelf} /> */}
          {/* <Route path="/book/:id" component={Book} /> */}
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
