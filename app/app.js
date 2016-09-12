import React, { Component } from 'react'
import { NavigatorIOS, StyleSheet, Image, Text, View } from 'react-native'

// Local Components
import RiskPage from './components/RiskPage'

// Constants
import { RISK } from './constants/contentConstants'

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        barTintColor='#17406B'
        titleTextColor='#fff'
        tintColor='#fff'
        initialRoute={{
          component: RiskPage,
          title: RISK.pageTitle,
        }}
        style={{flex: 1}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
