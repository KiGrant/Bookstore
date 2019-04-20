import React, {Component} from "react";
import { View, Text } from "react-native";
// import { Link } from "react-router-native";
import NavigationBar from 'react-native-navigation-bar';

export default class Nav extends Component {
  render(){
    return(
      <View>
        <NavigationBar 
          title={'Main title'}
          height={50}
          leftButtonTitle={'back'}
          rightButtonTitle={'forward'}
        />
        <Text>ABC</Text>
      </View>
    )
  }
}