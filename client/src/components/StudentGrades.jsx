import React from 'react';

const StudentGrades = (props) => {
  return (
    <div class="grades">
      Math: {props.student.grades.math}
      <br/>
      English: {props.student.grades.english}
      <br/>
      Science: {props.student.grades.science}
    </div>
  )
}
export default StudentGrades;