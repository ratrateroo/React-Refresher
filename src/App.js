import React from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

import './App.css';

// class App extends React.Component {
//   render() {
//     return <h1 title="This works!">A React App!</h1>;
//   }
// }

const App = () => {
  //return React.createElement('h1', {title: 'This works!'}, 'A React App!';
  //return <h1 title="This works!">A React App!</h1>;

  const goalList = [
    {id: 'g1', text: 'Learn Coding'},
    {id: 'g2', text: 'Learn Designing'},
    {id: 'g3', text: 'Learn Developing'},
    {id: 'g4', text: 'Apply Designing & Developing'}
  ];

  return (
    <div className="goals">
      <h2>Goal List</h2>
      <NewGoal />
      <GoalList goals={goalList}/>
    </div>
  );
};

export default App;
