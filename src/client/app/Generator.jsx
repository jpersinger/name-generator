import React from 'react';
import RandomWords from 'random-words';
import styles from './styles.css';

class Generator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {namesList1: [], namesList2: [], namesList3: []};
    this.onGenerate = this.onGenerate.bind(this);
  }

  onGenerate () {
    let totalNames = 15;
    let currNamesList1 = [];
    let currNamesList2 = [];
    let currNamesList3 = [];

    for (let i = 0; i < totalNames; i++) {
      currNamesList1[i] = <p className = {styles.style1} key = {"1." + i}>{RandomWords(1).join(" ")}</p>;
      currNamesList2[i] = <p className = "style1" key = {"2." + i}>{RandomWords(2).join(" ")}</p>;
      currNamesList3[i] = <p key = {"3." + i}>{RandomWords(3).join(" ")}</p>;
    }
    this.setState(
      {
        namesList1: currNamesList1,
        namesList2: currNamesList2,
        namesList3: currNamesList3
      });
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.onGenerate}>Generate Names</button>
        </div>
        <div>
          <div>{this.state.namesList1}</div>
          <div>{this.state.namesList2}</div>
          <div>{this.state.namesList3}</div>
        </div>
      </div>
    );
  }

}

export default Generator;