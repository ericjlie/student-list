import React from 'react';
import StudentEntry from './StudentEntry.jsx';

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render () {
    return (
      <div>
        {this.props.students.map((student) => (<div><StudentEntry student={student}/><br/></div>))}
      </div>
    )
  }
}

export default StudentList;