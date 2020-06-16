import React from "react";
import { Link } from "react-router-dom";

const ShowStudent = ({ handleClickAllStudents }) => {
  return (
    <li className="student" onClick={handleClickAllStudents}>
      <Link className="link" to={"/"}>
        Show all students
      </Link>
    </li>
  );
};

export default ShowStudent;
