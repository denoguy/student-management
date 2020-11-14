import React from "react";
import "./AddStudent.css";

function AddStudent() {
  return (
    <div className="addStudent">
      <form>
        <div className="fullname">
          <input type="text" id="fullname" />
        </div>
        <div className="email">
          <input type="Email" id="email" />
        </div>
        <div className="address">
          <input type="text" id="address" />
        </div>
        <button className="submit__btn">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
