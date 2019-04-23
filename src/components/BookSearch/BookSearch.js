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
// import {search} from "../Baseapi/Baseapi"
// import { Link } from "react-router-native";
import SearchBar from "./SearchBar";

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
  componentDidMount() {
    axios(`${api}/books/search/${newQuery}`)
      .then(response => {
        this.setState({
          allBooks: response.data,
          isLoading: false,
          hasError: false
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          hasError: true
        });
      });
  }
  filterInput = userInput => {
    const input = searchInput.toLowerCase();
    this.setState({
      searchInput,
      books: this.state.allBooks.filter(books => {
        const name = `${user.name.first} ${user.name.last}`;
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
