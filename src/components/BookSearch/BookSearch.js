import React, { Component } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button
} from "react-native";

// import { Link } from "react-router-native";
import SearchBar from "./SearchBar";
import { getBookSelf } from "../baseApi/baseApi";

const api = "http://localhost:7000";

export default class BookSearch extends Component {
  state = {
    searchInput: "",
    books: [],
    hasError: false,
    error: null,
    isLoading: true,
    allBooks: []
  };

  filterInput = searchInput => {
    const input = searchInput.toLowerCase();
    this.setState({
      searchInput,
      books: this.state.allBooks.filter(book => {
        const key = `book-${book.id}`;
        const link = `/book/${book.id}`;
        return name.match(input);
      })
    });
  };

  render() {
    return (
      <View>
        <SearchBar />
      </View>
    );
  }
}
