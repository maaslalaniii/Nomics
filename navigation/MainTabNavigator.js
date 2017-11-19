import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TabNavigator, TabBarBottom } from 'react-navigation'

import Colors from '../constants/Colors'

import HomeScreen from '../screens/HomeScreen'
import EducationScreen from '../screens/EducationScreen'
import WorkScreen from '../screens/WorkScreen'
import FriendsScreen from '../screens/FriendsScreen'

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Education: {
      screen: EducationScreen,
    },
    Work: {
      screen: WorkScreen,
    },
    Friends: {
      screen: FriendsScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios' ? `ios-home${focused ? '' : '-outline'}` : 'md-home'
            break
          case 'Education':
            iconName = Platform.OS === 'ios' ? `ios-book${focused ? '' : '-outline'}` : 'md-book'
            break
          case 'Work':
            iconName = Platform.OS === 'ios' ? `ios-briefcase${focused ? '' : '-outline'}` : 'md-briefcase'
            break
          case 'Friends':
            iconName = Platform.OS === 'ios' ? `ios-people${focused ? '' : '-outline'}` : 'md-people'
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        )
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
)
