import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      fourSushis : [],
      currentIndex : 0,
      allSushis : [],
      cash: 100,
      eaten: 0
    }

    fetch(API)
    .then(res => res.json())
    .then(json => this.setState(
      {
        allSushis: json
      }
    ))
    .then(_ => this.onMoreSushi())
  }

  onMoreSushi = () => {
    let index = this.state.currentIndex
    let tempSushis = []
    this.setState({ fourSushis : [] })
    for(let i = index; i < index + 4; i++) {
      tempSushis.push(this.state.allSushis[i])
    }
    this.setState(
      {
        fourSushis : tempSushis,
        currentIndex : this.state.currentIndex + 4
      }
    )
  }

  clickSushi = (price, index) => {
    if (this.state.cash >= price) {
      this.setState({cash: this.state.cash - price})
      let tempArray = this.state.fourSushis
      tempArray[index].eaten = true
      this.setState({
        fourSushis: tempArray,
        eaten: this.state.eaten+1
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          fourSushis={this.state.fourSushis}
          onMoreSushi={this.onMoreSushi}
          clickSushi={this.clickSushi}
        />
        <Table
          cash={this.state.cash}
          eaten={this.state.eaten}
        />
      </div>
    );
  }
}

export default App;
