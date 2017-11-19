import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class FriendsScreen extends React.Component {
  static navigationOptions = {
    title: 'Friends',
  };

  render() {
    return <View style={styles.container}></View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})