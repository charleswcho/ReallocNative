import React, { Component } from 'react'
import { StyleSheet, View, Text, Slider, TouchableHighlight} from 'react-native'
// Components
import RiskProfile from './RiskProfile'
import AllocPage from './AllocPage'
import Button from './Button'
// Constants
import { RISK, ADJUST, BUTTON } from '../constants/contentConstants'
// Styles
import { appStyles } from './appStyles'

export default class RiskPage extends Component {
  state = {
    riskVal: 5
  }

  nextPage = () => {
    this.props.navigator.push({
      title: ADJUST.pageTitle,
      component: AllocPage
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={appStyles.title}>{RISK.title}</Text>
        <Text style={appStyles.sub}>{RISK.sub}</Text>

        <RiskProfile riskVal={this.state.riskVal}/>

        <Slider value={this.state.riskVal} minimumValue={0} maximumValue={10}
                minimumTrackTintColor={'#1689e5'}
                onValueChange={(val) => this.setState({ riskVal: val }) }/>

        <Button name={BUTTON.name} onPress={this.nextPage}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64 + 40,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20
  },
});
