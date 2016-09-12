import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
// Components
import DonutChart from './DonutChart'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// Actions
import { clearData } from '../actions/clientActions'
// Constants
import { ADJUST } from '../constants/contentConstants'
// Stores
import ResultStore from '../stores/resultStore'
// Styles
import { appStyles } from './appStyles'

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
    clearData()
  }

  parseDiff() {
    let diff = {},
        desiredPort = this.state.desiredPortfolio,
        actualPort = this.state.actualPortfolio,
        actualSum = this.state.actualSum

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
      <View style={styles.diffContainer}>
        {Object.keys(diff).map((asset, idx) => {
          let val = diff[asset]
          return (
            <View style={styles.textContainer} key={idx}>
              <Text>{asset + ' '}</Text>
              <Text>{val[1].toFixed(2) + '% | $ ' + val[0].toFixed(2)}</Text>
            </View>
          )
        })}
      </View>
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
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text style={appStyles.title}>{ADJUST.title}</Text>

        <DonutChart data={this.state.actualPortfolio}/>
        <Text style={appStyles.sub}>{ADJUST.actual}</Text>

        {this.renderDiff()}

        <DonutChart data={this.state.desiredPortfolio}/>
        <Text style={appStyles.sub}>{ADJUST.target}</Text>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 850,
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  diffContainer: {
    paddingTop: 20,
    paddingBottom: 20
  },
  textContainer: {
    width: 300,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
