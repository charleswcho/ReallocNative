import React, { Component } from 'react'
import { View, StyleSheet, TextInput } from 'react-native';

export default class AssetInput extends Component {
  render() {
    const p = this.props
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}
                   keyboardType={'phone-pad'}
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
    width: 250,
    marginBottom: 15,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderColor: '#1689e5'
  },
  textInput: {
    height: 30,
    paddingLeft: 10
  }
});
