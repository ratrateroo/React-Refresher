import React from 'react';

import GoalList from './components/GoalList';
import './App.css';

// class App extends React.Component {
//   render() {
//     return <h1 title="This works!">A React App!</h1>;
//   }
// }

const App = () => {
  //return React.createElement('h1', {title: 'This works!'}, 'A React App!';
  //return <h1 title="This works!">A React App!</h1>;

  return <div className="goals">
    <h2>Goal List</h2>
    <GoalList />
  </div>
};

export default App;
