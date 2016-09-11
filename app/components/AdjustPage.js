import React, { Component } from 'react'

import { StyleSheet, View, Text } from 'react-native'

// Components
import DonutChart from './DonutChart'

// Stores
import ResultStore from '../stores/resultStore'

export default class AdjustPage extends Component {
  state = {
    desiredPortfolio: ResultStore.desiredPortfolio(),
    actualPortfolio: ResultStore.actualPortfolio(),
    actualSum: ResultStore.actualSum()
  }

  componentDidMount() {
    ResultStore.addChangeListener(this._resultsChanged);
  }

  componentWillUnmount()  {
    ResultStore.removeChangeListener(this._resultsChanged);
  }

  parseDiff() {
    let diff = {},
        desiredPort = this.state.desiredPortfolio,
        actualPort = this.state.actualPortfolio,
        actualSum = this.state.actualSum

    console.log('actual port', actualPort, 'desiredPort', desiredPort)

    desiredPort.forEach((asset, idx) => {
      // Calculate the target value and find the difference and percent difference with the actual value of the user's asset

      let desiredVal = (asset.y / 100) * actualSum,
          actualVal = actualPort[idx].y,
          percentDelta = ((desiredVal - actualVal) / actualVal) * 100;

      diff[asset.x] = [desiredVal - actualVal, percentDelta]
    })

    // Format of diff object { assetName: [diff, percent diff] }
    return diff
  }

  renderDiff() {
    let diff = this.parseDiff();

    return (
        {
          Object.keys(diff).map((asset, idx) => {
            return <View key={idx}><Text>{asset + ' '}</Text>
              {this.formatAssetVal(asset, diff[asset])}</View>
          })
        }
    )
  }

  formatAssetVal(asset, val) {
    return (
      <Text className={(val[0] < 0) ? 'negative' : 'positive'}>
         {val[1].toFixed(2) + '% | $ ' + val[0].toFixed(2)}
      </Text>
    )
  }

  _resultsChanged = () => {
    this.setState({
      desiredPortfolio: ResultStore.desiredPortfolio(),
      actualPortfolio: ResultStore.actualPortfolio(),
      actualSum: ResultStore.actualSum()
    })
  }

  render() {
    return (
      <View>
        <Text>See what you need to change to achieve your goal</Text>

        <Text>Current Portfolio</Text>
        <DonutChart data={this.state.actualPortfolio}/>


        <Text>Target Portfolio</text>
        <DonutChart data={this.state.desiredPortfolio}/>
      </View>
    );
  }
}
