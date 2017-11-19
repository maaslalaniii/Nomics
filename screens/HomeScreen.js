import React from 'react'
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { Constants } from 'expo'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.balance}>
          <Text style={styles.balanceLabel}>Balance </Text><Text style={styles.balanceAmount}>{User.balance}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 20
  },
  balanceLabel: {
    fontFamily: 'Avenir',
    fontSize: 24,
    alignSelf: 'center'
  },
  balanceAmount: {
    fontFamily: 'Avenir',
    fontSize: 24,
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  balance: {
    flexDirection: 'row',
    alignSelf: 'center'
  }
})
