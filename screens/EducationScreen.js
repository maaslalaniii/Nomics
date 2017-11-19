import React from 'react'
import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity, WebView } from 'react-native'
import { Constants } from 'expo'

const videosToWatch = {
  'Elementary': 1,
  'Middle School': 4,
  'High School': 9,
  'University': 19,
  'Masters': 34
}

const educationLevel = {
  2: 'Middle School',
  5: 'High School',
  10: 'University',
  20: 'Masters'
}

const income = {
  'Elementary': 1,
  'Middle School': 2,
  'High School': 5,
  'University': 10,
  'Masters': 0
}

const expenses = {
  'Elementary': 0,
  'Middle School': 2,
  'High School': 4,
  'University': 20,
  'Masters': 40
}

const thumbnails = [
  require('../assets/images/tutorial1.png'),
  require('../assets/images/tutorial2.png'),
  require('../assets/images/tutorial3.png'),
  require('../assets/images/tutorial4.png'),
  require('../assets/images/tutorial5.png'),
  require('../assets/images/tutorial6.png'),
  require('../assets/images/tutorial7.png'),
  require('../assets/images/tutorial8.png'),
  require('../assets/images/tutorial9.png'),
  require('../assets/images/tutorial10.png'),
  require('../assets/images/tutorial11.png'),
  require('../assets/images/tutorial12.png'),
  require('../assets/images/tutorial13.png'),
  require('../assets/images/tutorial14.png'),
  require('../assets/images/tutorial15.png'),
  require('../assets/images/tutorial16.png'),
  require('../assets/images/tutorial17.png'),
 ]

export default class EducationScreen extends React.Component {
  static navigationOptions = {
    title: 'Learn',
  }

  constructor() {
    super()
    this.state = {
      watchingVideo: false,
      videosToWatch: videosToWatch[User.education] - User.videosWatched
     }
  }

  watchVideo() {
    User.videosWatched = User.videosWatched + 1
    
    if (User.videosWatched < 3) {  
      this.setState({ watchingVideo: true })
    }

    if (User.videosWatched >= 17) return

    if (User.videosWatched >= videosToWatch[User.education]) {
      User.education = educationLevel[User.videosWatched + 1]
      User.job.salary = income[User.education]
      User.expenses.rent = expenses[User.education]

    } 

    this.setState({ videosToWatch: videosToWatch[User.education] - User.videosWatched })
  }

  render() {
    return this.state.watchingVideo ? (
      <WebView
        source={{uri: 'https://www.youtube.com/watch?v=GtaoP0skPWc&list=PL9ECA8AEB409B3E4F'}}
        onLoadEnd={() => setTimeout(() => this.setState({ watchingVideo: false }), 2000)}
      />
      
    ): (
      <ScrollView style={styles.container}>
        <View style={styles.item}>
          <Text>Education</Text>
          <Text style={styles.largeText}>{User.education}</Text>
        </View>
        <View style={styles.item}>
          <Text>Watch {this.state.videosToWatch} video{this.state.videosToWatch == 1 ? ' ' : 's ' }to graduate {User.education}</Text>
        </View>

        <TouchableOpacity onPress={this.watchVideo.bind(this)}> 
          <Image style={styles.thumbnail} source={thumbnails[User.videosWatched]} />
        </TouchableOpacity> 
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
  },
  item: {
    marginBottom: 30, 
  },
  largeText: {
    fontFamily: 'Avenir',
    fontSize: 30,
  },
  thumbnail: {
    height: 175,
    width: '100%'
  }
})