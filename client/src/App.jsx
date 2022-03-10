import React from 'react';
import studentsData from '../../data/students.js'

class App extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      students: studentsData
    };
  }
  render () {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
};

export default App;