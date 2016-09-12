import React, { Component } from 'react'
import { StyleSheet,
         View,
         Text,
         Slider,
         TouchableHighlight} from 'react-native'

// Components
import RiskProfile from './RiskProfile'
import AllocPage from './AllocPage'
import Button from './Button'
// Styles
import { appStyles } from './appStyles'

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
          <Text style={appStyles.title}>Start by selecting a risk profile</Text>
          <Text style={appStyles.sub}>
            Don't worry, you call always come back and change it</Text>

        <RiskProfile riskVal={this.state.riskVal}/>

        <Slider value={this.state.riskVal}
                onValueChange={(val) => this.setState({ riskVal: val }) }
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor={'#1689e5'}/>

        <Button name='Continue' onPress={this.nextPage}/>
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
