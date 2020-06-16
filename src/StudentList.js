import React from "react";
import ShowStudent from "./ShowStudent";
import { BrowserRouter as Router } from "react-router-dom";
import ShowAllStudents from "./ShowAllStudents";

class StudentList extends React.Component {
  render() {
    const listItems = this.props.students.map((name) => (
      // console.log('name',name)

      <div className="student">
        <ShowStudent
          name={name}
          handleClickStudent={this.props.handleClickStudent}
        />
      </div>
    ));

    // }
    if (this.props.singleStudentState === false) {
      return (
        <React.Fragment>
          <Router>
            <div>
              <nav>
                <ul>
                  <div>{listItems}</div>
                </ul>
              </nav>
            </div>
          </Router>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Router>
            <div>
              <nav>
                <ul>
                  <div>{listItems}</div>
                  <ShowAllStudents
                    handleClickAllStudents={this.props.handleClickAllStudents}
                  />
                </ul>
              </nav>
            </div>
          </Router>
        </React.Fragment>
      );
    }
  }
}

export default StudentList;
