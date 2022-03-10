import React from 'react';
import StudentGrades from './StudentGrades.jsx';

class StudentEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    this.setState({isClicked: !this.state.isClicked})
  }

  render () {
    return (
      <div onClick={this.clickHandler}>
        <div>{this.props.student.name_first + ' ' + this.props.student.name_last}</div>
        {this.state.isClicked ? <StudentGrades student={this.props.student}/> : <></> }
      </div>
    )
  }
}

export default StudentEntry;