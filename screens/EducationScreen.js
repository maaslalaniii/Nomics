import React from 'react'
import { View, StyleSheet } from 'react-native'

export default class EducationScreen extends React.Component {
  static navigationOptions = {
    title: 'Learn',
  }

  constructor() {
    super()
    User.name = 'Maas Lalani'
  }

  render() {
    return (
      <View style={styles.container}></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})