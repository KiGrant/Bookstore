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
// import { getBookSelf } from "../baseApi/baseApi";
import { ListItem, SearchBar } from 'react-native-elements';

const api = "http://localhost:7000";

export default class BookSearch extends Component {
  state = {
    searchInput: "",
    books: [],
    hasError: false,
    isLoading: true,
    allBooks: []
  };

  filterInput = searchInput => {
    const input = searchInput.toLowerCase();
    axios
      .get(`http://localhost:7000/books/search/${searchInput}`)
      .then(response => {
        const books = response.data.books;
        this.setState({ books });
      })
      .catch(() => {
        throw new Error("Could not find book");
      });
    this.setState({
      searchInput,
      books: this.state.allBooks.filter(book => {
        const bookTitle = book.title;
        const link = `/book/${book.id}`;
        return bookTitle.match(input);
      })
    });
  };

  render() {
    const { searchInput, isLoading, books, allBooks } = this.props.state;
    return (
      <View>
        <SearchBar state = {...this.state} />
      </View>
    );
  }
}
