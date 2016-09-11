import React, { Component } from 'react'
import { StyleSheet,
         View,
         Text,
         Slider,
         TouchableHighlight} from 'react-native'

// Components
import RiskProfile from './RiskProfile'

// import AllocPage from './AllocPage'

import NextPage from './nextPage'

export default class RiskPage extends Component {
  state = {
    riskVal: 5
  }

  nextPage = () => {
    this.props.navigator.push({
      title: 'Alloc Page',
      component: NextPage
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
                maximumValue={10}/>

        <TouchableHighlight onPress={this.nextPage}>
          <Text>Continue</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64 + 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    paddingBottom: 10,
    textAlign: 'center',
  },
  sub: {
    fontSize: 14,
    fontWeight: '500',
    paddingBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2f97eb'
  }
});
