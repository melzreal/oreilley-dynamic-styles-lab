import React from 'react';
import './Person.css';


const person = (props) => {


 return (
 	<div className= "Person" >
	 	<p> {props.name} I am {props.age}</p>
		 <div> {props.children}</div>
	 	<input type ="text" 
	 	onChange={props.changed} 
	 	value={props.name}/>
	</div>
 )
}

export default person;