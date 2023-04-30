import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {length: 0}

  onChangeSearchInput = event => {
    this.setState({length: event.target.value.length})
  }

  render() {
    const {length} = this.state
    return (
      <div className="bg-container">
        <div className="letters-container">
          <h1 className="title">Calculate the Letters you enter</h1>
          <label htmlFor="enter" className="para">
            Enter the phrase
          </label>
          <input
            id="enter"
            type="text"
            placeholder="Enter the phrase"
            className="input"
            onChange={this.onChangeSearchInput}
          />
          <p className="count">No.of letters: {length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="letters"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
