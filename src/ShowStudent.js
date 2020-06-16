import React from "react";
import { Link } from "react-router-dom";

const ShowStudent = ({ name, handleClickStudent }) => {
  return (
    <li onClick={handleClickStudent}>
      <Link className="link" value={name} to={`/${name}`}>
        {name}
      </Link>
    </li>
  );
};

export default ShowStudent;
