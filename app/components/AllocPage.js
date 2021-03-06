import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
// Components
import AdjustPage from './AdjustPage'
import AssetInput from './AssetInput'
import DonutChart from './DonutChart'
import Button from './Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// Actions
import { submitActual } from '../actions/clientActions'
// Constants
import { PROFILES, ASSETS, STATE } from '../constants/profileConstants'
import { ALLOC, ADJUST, BUTTON } from '../constants/contentConstants'
// Styles
import { appStyles } from './appStyles'

export default class AllocPage extends Component {
  componentWillMount () {
    this.setState(STATE)
  }

  nextPage = () => {
    submitActual(this.calcData())

    this.props.navigator.push({
      title: ADJUST.pageTitle,
      component: AdjustPage
    })
  }

  calcData = () => {
    // Transform state into object readable by chart
    let calc = Object.keys(this.state)
      .filter(asset => {
        let val = parseInt(this.state[asset])
        return (val > 0 && !Number.isNaN(val) )})
      .map(asset => {
        return { x: asset, y: parseInt(this.state[asset]), label: asset } })

    return calc.length === 0 ? PROFILES.Moderate : calc
  }

  render() {
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text style={appStyles.title}>{ALLOC.title}</Text>

        <DonutChart data={this.calcData()}/>

        {ASSETS.map((asset, idx) => {
          return (<AssetInput
            key={idx} name={asset} value={this.state[asset].toString()}
            inputChanged={val => this.setState({ [ASSETS[idx]]: val })}/>)
        })}

        <Button name={BUTTON.name} onPress={this.nextPage}/>
      </KeyboardAwareScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
  },
});
