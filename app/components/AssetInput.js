import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native';

import TextField from 'react-native-md-textinput'

export default class AssetInput extends Component {
  render() {
    const p = this.props
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}
                   keyboardStyle='number-pad'
                   name={p.name}
                   value={p.value}
                   placeholder={p.name}
                   onChangeText={p.inputChanged}/></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 200,
    marginBottom: 20,
    borderWidth: 1

  },
  textInput: {
    height: 30,
    paddingLeft: 10
  }
});
