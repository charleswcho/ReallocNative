import React, { Component } from 'react'

// Components
import DonutChart from './DonutChart'
import Paper from 'material-ui/Paper'

// Stores
import ResultStore from '../stores/resultStore'

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
  }

  parseDiff() {
    let diff = {},
        desiredPort = this.state.desiredPortfolio,
        actualPort = this.state.actualPortfolio,
        actualSum = this.state.actualSum

    console.log('actual port', actualPort, 'desiredPort', desiredPort)

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
      <ul className='diffs'>
        {
          Object.keys(diff).map((asset, idx) => {
            return <li key={idx}><span>{asset + ' '}</span>
              {this.formatAssetVal(asset, diff[asset])}</li>
          })
        }
      </ul>
    )
  }

  formatAssetVal(asset, val) {
    return (
      <span className={(val[0] < 0) ? 'negative' : 'positive'}>
         {val[1].toFixed(2) + '% | $ ' + val[0].toFixed(2)}
      </span>
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
      <div className="adjust-page">
        <div className='intro'>
          <h1>See what you need to change to achieve your goal</h1></div>

        <Paper className='chart' zDepth={3}>Current Portfolio
          <DonutChart data={this.state.actualPortfolio}/></Paper>

        {this.renderDiff()}

        <Paper className='chart' zDepth={3}>Target Portfolio
          <DonutChart data={this.state.desiredPortfolio}/></Paper>
      </div>
    );
  }
}
