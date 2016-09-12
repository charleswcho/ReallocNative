import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
// Components
import DonutChart from './DonutChart'
// Actions
import { submitDesired } from '../actions/clientActions'
// Constants
import { PROFILES, PORTFOLIOS } from '../constants/profileConstants'
// Styles
import { appStyles } from './appStyles'

export default class RiskPage extends Component {
  switchProfile() {
    let riskVal = this.props.riskVal
    switch (true) {
      case (riskVal < 3):
        submitDesired(PORTFOLIOS[0])
        return PORTFOLIOS[0]
      case (riskVal >= 3 && riskVal <= 6):
        submitDesired(PORTFOLIOS[1])
        return PORTFOLIOS[1]
      case (riskVal > 6):
        submitDesired(PORTFOLIOS[2])
        return PORTFOLIOS[2]
      default:
        return;
    }
  }

  render() {
    let profile = this.switchProfile()
    return (
      <View style={styles.container}>
        <Text style={appStyles.title}>{profile}</Text>
        <DonutChart data={PROFILES[profile]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
