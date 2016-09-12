import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

export default class Button extends Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableHighlight style={styles.button} onPress={this.props.onPress}
                            underlayColor={'#2f97eb'}>
          <Text style={styles.buttonText}>{this.props.name}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
