import React, { Component } from 'react'

import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

// Components
import AdjustPage from './AdjustPage'

import AssetInput from './AssetInput'
import DonutChart from './DonutChart'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Actions
// import { submitActual } from '../actions/clientActions'

// Constants
import { PROFILES } from '../constants/profileConstants'

const ASSETS = [
  'Developed Markets',
  'Emerging Markets',
  'Municipal Bonds',
  'US Total Stock Market',
  'US Large-Cap Value'
]

export default class AllocPage extends Component {
  state = {
    'Developed Markets': '',
    'Emerging Markets': '',
    'Municipal Bonds': '',
    'US Total Stock Market': '',
    'US Large-Cap Value': ''
  }

  nextPage = () => {
    this.props.navigator.push({
      title: 'Adjust Page',
      component: AdjustPage
    })
  }

  calcData = () => {
    // Transform state into object readable by chart
    let calc = Object.keys(this.state)
      .filter(asset => {
        let val = parseInt(this.state[asset])
        return (val > 0 && !Number.isNaN(val) )})
      .map(asset => { return { x: asset, y: this.state[asset], label: asset } })

    return calc.length === 0 ? PROFILES.Moderate : calc
  }

  _handleSubmit = (e) => {
    submitActual(this.calcData())
  }

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text>Enter your current Allocation of assets</Text>

        <DonutChart data={this.calcData()}/>

        {Object.keys(this.state).map((asset, idx) => {
          return (<AssetInput key={idx} name={asset}
                              value={this.state[asset].toString()}
                              inputChanged={
                                val => this.setState({ [ASSETS[idx]]: val })
                              }/>)
        })}

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={this.nextPage}
                              underlayColor={'#2f97eb'}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    paddingBottom: 10,
    textAlign: 'center',
    fontFamily: 'Helvetica Neue'
  },
  sub: {
    color: '#686868',
    fontSize: 12,
    fontWeight: '300',
    paddingBottom: 10,
    textAlign: 'center',
    fontFamily: 'Helvetica Neue'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  button: {
    width: 150,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 30,
    borderRadius: 3,
    backgroundColor: '#1689e5'
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center'
  }
});
