// @flow

import React, { Component } from 'react';
import '../css/App.css';
import StarUl from './Components/StarUl';
import NameHeader from './Components/NameHeader';
import Button from './Components/Button';
import Table from './Components/Table'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

type Props = { +testObj: Object };

type State = {
  data: Array<{ 
    name: string
  }>,
  page:number
};

class App extends Component<Props,State> {

  state = { data: [], page: 1 };

  getPeople = (event: SyntheticEvent<HTMLButtonElement>) => {
    fetch(`https://swapi.co/api/people/?page=${this.state.page}`).then(res => res.json())
    .then(json => {
      console.log(json.results);
      this.setState(prevStep => ({data: json.results, page: prevStep.page + 1 }))
    });
  }

  getStarships = (event: SyntheticEvent<HTMLButtonElement>) => {
    fetch(`https://swapi.co/api/starships/?page=${this.state.page}`).then(res => res.json())
      .then(json => {
        console.log(json.results);
        this.setState(prevStep => ({data: json.results, page: prevStep.page + 1 }))
      });
  }
  
  getInfo = (type: string) => {
    fetch(`https://swapi.co/api/starships/?page=${this.state.page}`).then(res => res.json())
      .then(json => {
        console.log(json.results);
        this.setState(prevStep => ({data: json.results, page: prevStep.page + 1 }))
      });
  }

  render() {
    console.log('App');
    return (
      <div className="App">
        <header className="App-header">
          <NameHeader>React Learn</NameHeader>
          <Button click={this.getPeople}>People</Button>
          <Button click={this.getStarships}>Starships</Button>
          <StarUl data={this.state.data} testObj={this.props.testObj} />
          <Table/>
        </header>
      </div>
    );
  }
}

export default App;
