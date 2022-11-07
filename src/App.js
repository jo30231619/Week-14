import React from 'react';
import './App.css';
import StarRating from './components/starrating';
import Table from './components/table';
import Form from './components/form';


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      date: '',
      textarea: '',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      username: this.state.username,
      date: this.state.date,
      textarea: this.state.textarea
    });

    this.setState({
      items, 
      username: '',
      date: '',
      textarea: ''
    });
  };

  onChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
        <RatingSystem starCount={5} /><br />
        <Form handleFormSubmit={this.handleFormSubmit }
          onChange={ this.onChange }
          newUsername={ this.state.username }
          newDate={ this.state.date }
          newTextArea={ this.state.textarea } />
        <Table items={ this.state.items }/>
      </div>
    );
  }
}

const RatingSystem = (props) => {
  return (
      <div>
          <h1>RATE THIS</h1><br />
          <div className="rating">
              <StarRating starCount={props.starCount} />
          </div>
      </div>
  );
};



