import React, { Component } from 'react'
import { StyleSheet,
         View,
         Text,
         Slider,
         TouchableHighlight} from 'react-native'

// Components
import RiskProfile from './RiskProfile'

import AllocPage from './AllocPage'

import NextPage from './nextPage'

export default class RiskPage extends Component {
  state = {
    riskVal: 5
  }

  nextPage = () => {
    this.props.navigator.push({
      title: 'Alloc Page',
      component: AllocPage
    })
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Start by selecting a risk profile</Text>
          <Text style={styles.sub}>
            Don't worry, you call always come back and change it</Text>

        <RiskProfile riskVal={this.state.riskVal}/>

        <Slider value={this.state.riskVal}
                onValueChange={(val) => this.setState({ riskVal: val }) }
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor={'#1689e5'}/>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={this.nextPage}
                              underlayColor={'#2f97eb'}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableHighlight>
        </View>
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
