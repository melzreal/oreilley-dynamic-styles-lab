import React, {Component} from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {

state = {
	people: [
	{ id: 'sdaf', name: 'Momo', age: 29},
	{ id: 'sasf', name: 'Popo', age: 45},
	{ id: 'sdvv', name: 'Crayfish', age: 188}

	],

  showPerson: false,
}

nameChangeHandler = (event, id) => {

  const personInd = this.state.people.findIndex(p => {
    return p.id === id;
  });

    const person = {
    ...this.state.people[personInd]
  };


  person.name = event.target.value;
  const people = [...this.state.people];
  people[personInd] = person;
   
 this.setState({ people: people});

}


deletePersonHandler = (personIndex) => {
  //slice without arguments simply copies the array to a new one, or use spread

  const people = [...this.state.people];
  people.splice(personIndex, 1);
  this.setState({people: people});
}




togglePersonsHandler = () => {

  const doesShow = this.state.showPerson;
  this.setState({showPerson: !doesShow});

}




render(){
  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'white',
    font: 'inherit',
    ':hover':{
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

let people = null;

  if (this.state.showPerson) {
    people = (
      <div>
      {this.state.people.map((person, index) => {
        return <Person 
        click={() => this.deletePersonHandler(index)}
        name={person.name} 
        age={person.age}
        key={person.id} 
        changed={(event) => this.nameChangeHandler(event, person.id) }/>
      })}
                 
      </div>
     );
    buttonStyle.backgroundColor = 'green';
  
  }

  const classes =[];
  if(this.state.people.length <= 2){
    classes.push('red');
  }
  if (this.state.people.length <= 2){
    classes.push('bold');
  }

  return (

    <div className="App">
       <h1> HAAAY </h1>
       <p className={classes.join(' ')}> Uh la la </p>
       <button 
       style={buttonStyle}
       onClick={this.togglePersonsHandler}
       changed={this.nameChangeHandler}> Show Names </button>
       {people}
       
    </div>
    
  );

 }
}

export default App;
