import React, { Component } from 'react';
import TextField from 'material-ui/TextField'

const STYLES = {
  floatingLabelStyle: {
    color: '#2f97eb',
  },
  floatingLabelFocusStyle: {
    color: '#2f97eb',
  },
  underlineStyle: {
     borderColor: '#2f97eb',
   },
};

export default class AssetInput extends Component {
  render() {
    return (
      <TextField floatingLabelStyle={STYLES.floatingLabelStyle}
                 floatingLabelFocusStyle={STYLES.floatingLabelFocusStyle}
                 underlineFocusStyle={STYLES.underlineStyle}
                 type='number'
                 name={this.props.name}
                 floatingLabelText={this.props.name}
                 onChange={this.props.inputChanged}/>
    );
  }
}
