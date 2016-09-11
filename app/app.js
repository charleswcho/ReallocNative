import React, { Component } from 'react'
import { NavigatorIOS, StyleSheet, Image, Text, View } from 'react-native'

// Local Components

import RiskPage from './components/RiskPage'

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: RiskPage,
          title: 'Risk Page',
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
