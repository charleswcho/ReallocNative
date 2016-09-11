import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native';

export default class AssetInput extends Component {
  render() {
    return (
      <TextField style={styles.textInput}
                 keyboardStyle='number-pad'
                 name={this.props.name}
                 placeholder={this.props.name}
                 onChangeText={this.props.inputChanged}/>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
  }
});
