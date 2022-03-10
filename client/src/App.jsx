import React from 'react';
import studentsData from '../../data/students.js';
import StudentList from './components/StudentList.jsx';
import AddStudent from './components/StudentList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      students: studentsData,
      cohort: 'none'
    };
    this.addStudent = this.addStudent.bind(this);
  }

  changeCohort(cohort){
    this.setState({cohort: cohort});
  }

  addStudent(newStudent, math = 'F', science = 'F', english = 'F'){
    let student = {

    }
  }

  render () {
    return (
      <div>
        <h1>Student List</h1>
        <AddStudent />
        <div>
          <button onClick={()=>{this.changeCohort('none')}}>All Students</button>
          <button onClick={()=>{this.changeCohort('sfo139')}}>HR-SFO139</button>
          <button onClick={()=>{this.changeCohort('rfp57')}}>HR-RFP57</button>
        </div>
        <StudentList students={
          this.state.cohort === 'none'
          ? this.state.students
          : this.state.students.filter(student => student.cohort == this.state.cohort)
          }
        />
      </div>
    )
  }
};

export default App;