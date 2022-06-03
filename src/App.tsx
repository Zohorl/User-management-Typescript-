import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';


let student: string = 'Hablu';
let age: number = 45;
let isSmart: boolean = true;

let students: string[] = ['Joe', 'Baten', 'Komila'];
let numbers: number[] = [1, 23, 4, 5, 6, 77];

// interface
interface Person {
  name: string,
  // kono property optional hole ? use korte hoi
  job?: string | number,
  employed: string | boolean,
  age: number
}

const person: Person = {
  name: 'Baten',
  age: 33,
  employed: true
};
// function type,return type.......function():  --->atai return type
const handleAddUser = (firstName: string, age: number, address: string): number => {
  const total: number = 55;
  console.log(firstName, age, address);
  return age;
};

function App() {

  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
