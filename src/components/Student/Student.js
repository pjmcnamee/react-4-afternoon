import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: {}
    }

  }

  componentDidMount(){
    Axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(res => {
      this.setState({
        studentInfo: res.data
      })
    }).catch(err => console.log('Student info fetch ', err))
  }

  render() {
    return (
      <div className="box">
      <Link to={`/classlist/${this.state.studentInfo.class}`}>
        <button>Back to ClassList</button>
      </Link>
        <h1>Student</h1>
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
      </div>
    )
  }
}