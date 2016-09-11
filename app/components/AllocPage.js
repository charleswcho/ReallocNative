import React, { Component } from 'react'

import { View, Text } from 'react-native'

// Components
import AssetInput from './AssetInput'
import DonutChart from './DonutChart'

// Actions
import { submitActual } from '../actions/clientActions'

export default class AllocPage extends Component {
  state = {
    "Developed Markets": 5,
    "Emerging Markets": 5,
    "Municipal Bonds": 5,
    "US Total Stock Market": 5,
    "US Large-Cap Value": 5
  }

  calcData = () => {
    // Transform state into object readable by chart
    return Object.keys(this.state)
      .filter(asset => {
        let val = this.state[asset]
        return (val > 0 && !Number.isNaN(val) )})
      .map(asset => { return { x: asset, y: this.state[asset], label: asset } })
  }

  _inputChanged = (e) => {
    const val = parseInt(e.target.value, 10)

    // Dynamically set state with computed property
    this.setState({ [e.target.name]: val })
  }

  _handleSubmit = (e) => {

    submitActual(this.calcData())
  }

  render() {
    return (
      <View>
        <View>
          <Text>Enter your current Allocation of assets</Text></View>

        <View>
          <Paper  zDepth={3}>
            <DonutChart data={this.calcData()}/></Paper>

          <ul>
            {Object.keys(this.state).map((asset, idx) => {
              return (<AssetInput key={idx} name={asset}
                                  inputChanged={this._inputChanged}/>)
            })}
          </ul>
        </View>

        <View>
          <Link  to={"/"}>Back</Link>
          <Link  to={"/adjust"} onClick={this._handleSubmit}>
            Continue</Link>
        </View>
      </View>
    );
  }
}
