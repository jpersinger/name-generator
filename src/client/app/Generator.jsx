import React from 'react';
import RandomWords from 'random-words';
require('./styles.css');

class Generator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {namesList1: [], namesList2: [], namesList3: [], number: 20};
    this.onGenerate = this.onGenerate.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let currNum = event.target.value;
    if (currNum > 50) {currNum = 50}
    if (currNum < 0) {currNum = 0}
    this.setState({number: currNum});
  }

  onGenerate () {
    let totalNames = this.state.number;
    let currNamesList1 = [];
    let currNamesList2 = [];
    let currNamesList3 = [];

    for (let i = 0; i < totalNames; i++) {
      currNamesList1[i] = <p key = {"1." + i}>{RandomWords(1).join(" ")}</p>;
      currNamesList2[i] = <p key = {"2." + i}>{RandomWords(2).join(" ")}</p>;
      currNamesList3[i] = <p key = {"3." + i}>{RandomWords(3).join(" ")}</p>;
    }
    this.setState({
        namesList1: currNamesList1,
        namesList2: currNamesList2,
        namesList3: currNamesList3
      });
  }

  render() {
    return (
      <div>
        <div className = "header">
          <input type = "number" placeholder = "20 (max 50)" onChange={this.onChange.bind(this)} />
          <button className = "btn" onClick={this.onGenerate}>Generate Names</button>
        </div>
        <div className = "listStyle">
          <div>{this.state.namesList1}</div>
          <div>{this.state.namesList2}</div>
          <div>{this.state.namesList3}</div>
        </div>
      </div>
    );
  }

}

export default Generator;