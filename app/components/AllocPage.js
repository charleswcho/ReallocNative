import React, { Component } from 'react'

import { StyleSheet, View, Text } from 'react-native'

// Components
import AssetInput from './AssetInput'
import DonutChart from './DonutChart'

// Actions
// import { submitActual } from '../actions/clientActions'

const DATA = {
  "Developed Markets": 5,
  "Emerging Markets": 5,
  "Municipal Bonds": 5,
  "US Total Stock Market": 5,
  "US Large-Cap Value": 5
}

export default class AllocPage extends Component {
  state = {
    'Developed Markets': '',
    'Emerging Markets': '',
    'Municipal Bonds': '',
    'US Total Stock Market': '',
    'US Large-Cap Value': ''
  }

  calcData = () => {
    // Transform state into object readable by chart
    return Object.keys(this.state)
      .filter(asset => {
        let val = this.state[asset]
        return (val > 0 && !Number.isNaN(val) )})
      .map(asset => { return { x: asset, y: this.state[asset], label: asset } })
  }

  _inputChanged = (val, r) => {
    debugger
    // Dynamically set state with computed property
    this.setState({ [e.target.name]: val })
    console.log(this.state)
  }

  _handleSubmit = (e) => {

    submitActual(this.calcData())
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter your current Allocation of assets</Text>

        <DonutChart data={this.calcData()}/>

        {Object.keys(this.state).map((asset, idx) => {
          return (<AssetInput key={idx} name={asset}
                              value={this.state[asset].toString()}
                              inputChanged={this._inputChanged}/>)
        })}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 64 + 40,
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
  }
});



// <AssetInput key={idx} name={asset} inputChanged={this._inputChanged}/>
