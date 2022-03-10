import React from 'react';

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: undefined
    };
  }

  changeHandler(e){
    this.setState({val: e.target.value})
  }

  render(){
    return(
      <div>
        <input onChange={this.changeHandler} type='text'>Enter New Student Name Here</input>
        <button onClick={props.addStudent}>Add Student</button>
      </div>
    )
  }
}

export default AddStudent