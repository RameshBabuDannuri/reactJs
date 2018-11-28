import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Users from './User/Users';


class App extends Component {
  state = {
    persons: [
      {name: 'ramesh', age:'20'},
      {name: 'sai', age:'20'},
      {name: 'shaym', age:'24'}
    ]
  }
  switchNameHandler = () => {
    this.setState( {
     persons:[
      {name: 'ramesh babu', age:'26'},
      {name: 'sai kumar', age:'24'},
      {name: 'shaym prasad', age:'24'}
     ]
    })
  }

  nameChangehandler = (event) => {
    this.setState( {
      persons:[
       {name: 'ramesh babu', age:'26'},
       {name: event.target.value, age:'24'},
       {name: 'shaym prasad', age:'24'}
      ]
     })
  }
  render() {
    const style ={
      backgroundColor: 'yellow',
      font : 'inherite',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
         <h1>Hi im react app</h1> 
         <p>this is really working!</p>
         <button style ={style} onClick ={this.switchNameHandler}>switch names</button>
         <Person 
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
         <Person click={this.switchNameHandler}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed = {this.nameChangehandler} />
         <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />

         <Users></Users>
       </div>
      // React.createElement('div',{className:"App"},React.createElement('h1',null,'i am ramesh'))
    );
  }
}

export default App;
