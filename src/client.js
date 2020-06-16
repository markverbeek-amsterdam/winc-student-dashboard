import React from "react";
import studentData from "./data/studentData";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryGroup,
} from "victory";
import StudentList from "./StudentList";
import victoryTheme from "./victoryTheme";
import CheckBoxes from "./CheckBoxes";

class Client extends React.Component {
  constructor() {
    super();
    this.state = {
      sData: studentData,
      singleStudentState: false,
      difficultyChecked: true,
      funChecked: true,
    };
  }

  render() {
    //for each assignment, create a new object with the name of the assignment and the average score for fun and difficulty

    const allAssignmentNames = this.state.sData.map((entry) => {
      let assignmentNamesArray = [];
      assignmentNamesArray = assignmentNamesArray + entry.Assignment;
      return assignmentNamesArray;
    });

    const uniqueAssignmentNames = [...new Set(allAssignmentNames)];

    const allStudentNames = this.state.sData.map((entry) => {
      let studentNamesArray = [];
      studentNamesArray = studentNamesArray + entry.Name;
      return studentNamesArray;
    });

    const uniqueStudentNames = [...new Set(allStudentNames)];

    const assignmentAverages = uniqueAssignmentNames.map((assignment) => {
      let data = this.state.sData.filter((item) => {
        return assignment === item.Assignment;
      });
      let totalDifficulty = data
        .map((item) => item.Difficulty)
        .reduce((a, b) => a + b, 0);
      let averageDifficulty = totalDifficulty / data.length;
      let totalFun = data.map((item) => item.Fun).reduce((a, b) => a + b, 0);
      let averageFun = totalFun / data.length;
      let flatline = 0;
      return {
        assignment: assignment,
        difficulty: averageDifficulty,
        fun: averageFun,
        flatline: flatline,
      };
    });

    const data = assignmentAverages;

    const handleClickStudent = (event) => {
      const clickedItem = event.target.getAttribute("value");
      console.log("clicked!", clickedItem);
      const singleStudentData = this.state.sData.filter(
        (item) => item.Name === clickedItem
      );
      const displayDataForStudent = () =>
        this.setState({ sData: singleStudentData, singleStudentState: true });
      displayDataForStudent();
    };

    const handleClickAllStudents = () => {
      this.setState({ sData: studentData, singleStudentState: false });
    };

    const handleChangeCheckboxes = () => {
      if (this.state.difficultyChecked === true) {
        this.setState({ difficultyChecked: false });
      } else {
        this.setState({ difficultyChecked: true });
      }
    };

    const handleChangeFunCheckbox = () => {
      if (this.state.funChecked === true) {
        this.setState({ funChecked: false });
      } else {
        this.setState({ funChecked: true });
      }
    };

    return (
      <div>
        <p></p>

        <h1>Winc Student Dashboard</h1>

        <div className={"graph"}>
          <VictoryChart
            padding={{ left: 60, top: 30, right: 90, bottom: 110 }}
            theme={victoryTheme}
          >
            <VictoryAxis
              tickFormat={data.map((avg) => avg.assignment)}
              tickLabelComponent={
                <VictoryLabel angle={50} textAnchor="start" />
              }
            />

            <VictoryAxis
              dependentAxis
              tickValues={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]}
              tickFormat={(x) => `${x}`}
              margin={80}
            />

            <VictoryGroup offset={5}>
              {this.state.difficultyChecked ? (
                <VictoryBar
                  animate={{ duration: 1000 }}
                  data={data}
                  x="assignment"
                  y="difficulty"
                  color="red"
                />
              ) : (
                <VictoryBar
                  animate={{ duration: 1000 }}
                  data={data}
                  x="assignment"
                  y="flatline"
                  color="red"
                />
              )}

              {this.state.funChecked ? (
                <VictoryBar
                  animate={{ duration: 1000 }}
                  data={data}
                  x="assignment"
                  y="fun"
                  color="32a852"
                />
              ) : (
                <VictoryBar
                  animate={{ duration: 1000 }}
                  data={data}
                  x="assignment"
                  y="flatline"
                  color="32a852"
                />
              )}
            </VictoryGroup>
          </VictoryChart>
        </div>
        <div>
          <StudentList
            students={uniqueStudentNames}
            handleClickStudent={handleClickStudent}
            singleStudentState={this.state.singleStudentState}
            handleClickAllStudents={handleClickAllStudents}
          />
          <div>
            <CheckBoxes
              handleChangeCheckboxes={handleChangeCheckboxes}
              handleChangeFunCheckbox={handleChangeFunCheckbox}
              difficultyChecked={this.state.difficultyChecked}
              funChecked={this.state.funChecked}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Client;
