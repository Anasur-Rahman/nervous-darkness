// <label htmlFor="roll" className="form-label">Enter your roll:</label>
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "../css/CollegeChanceCalculator.css";

const CollegeChanceCalculator = ({ studentData }) => {
  const [roll, setRoll] = useState("");
  const [collegeChance, setCollegeChance] = useState(null);
  const [chances, setChances] = useState({});

  const handleRollChange = (event) => {
    setRoll(event.target.value);
  };

  const calculateCollegeChance = () => {
    const parsedRoll = parseInt(roll);

    // Convert student rolls to integers for comparison
    const student = studentData.find(
      (student) => parseInt(student.Roll) === parsedRoll
    );

    if (!student) {
      setCollegeChance("Student not found");
      setChances({}); // Reset chances
      return;
    }

    let chances = {};

    if (student.Marks > 1216 && student.Gpa === "5.00") {
      chances = {
        "Chittagong College": 100,
        "Govt. Mohsin College": 100,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.Marks === 1215 && student.Gpa === "5.00") {
      chances = {
        "Chittagong College": 98.1,
        "Govt. Mohsin College": 100,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.Marks === 1216 && student.Gpa === "5.00") {
      chances = {
        "Chittagong College": 99.7,
        "Govt. Mohsin College": 100,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (
      student.Marks < 1215 &&
      student.Marks > 1211 &&
      student.Gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 92,
        "Govt. Mohsin College": 100,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (
      student.Marks < 1212 &&
      student.Marks > 1207 &&
      student.Gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 100,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (
      student.Marks < 1208 &&
      student.Marks > 1204 &&
      student.Gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 100,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (
      student.Marks < 1200 &&
      student.Marks > 1188 &&
      student.Gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 91.2,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.Marks === 1200 && student.Gpa === "5.00") {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 96,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.Marks === 1201 && student.Gpa === "5.00") {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 97.2,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.Marks === 1202 && student.Gpa === "5.00") {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 98,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.Marks === 1188 && student.Gpa === "5.00") {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 99,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (
      student.Marks < 1188 &&
      student.Marks > 1185 &&
      student.Gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 98.1,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.Marks === 1185 && student.Gpa === "5.00") {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 97,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (
      student.Marks < 1185 &&
      student.Marks > 1178 &&
      student.Gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 81,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.Marks === 1178 && student.Gpa === "5.00") {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 98.3,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (
      student.Marks < 1178 &&
      student.Marks > 1172 &&
      student.Gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 87.7,
        "Chittagong Government Model School and College ": 99,
      };
    }

    //start
    else if (
      student.Marks < 1173 &&
      student.Marks > 1169 &&
      student.Gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 82,
        "Chittagong Government Model School and College ": 93,
      };
    } else if (
      student.Marks < 1170 &&
      student.Marks > 1165 &&
      student.Gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 61,
        "Chittagong Government Model School and College ": 87,
      };
    } else if (
      student.Marks < 1166 &&
      student.Marks > 1163 &&
      student.Gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 31,
        "Chittagong Government Model School and College ": 37,
      };
    } else if (
      student.Marks < 1164 &&
      student.Marks > 1159 &&
      student.Gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 0,
        "Chittagong Government Model School and College ": 11,
      };
    } else if (
      student.Marks < 1160 &&
      student.Marks > 1155 &&
      student.Gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 0,
        "Chittagong Government Model School and College ": 17,
      };
    } else if (student.Marks < 1156) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 0,
        "Chittagong Government Model School and College ": 0,
      };
    }
    setChances(chances);

    setRoll(parsedRoll);
  };

  return (
    <div className="container mt-4">
      <h2 id="h2c" className="text-xl font-bold">
        College Chance Calculator
      </h2>
      <div className="mb-3">
        <input
          type="number"
          placeholder="Enter Your Roll : "
          className="form-control"
          id="roll"
          value={roll}
          onChange={handleRollChange}
        />
      </div>

      <div className="d-flex flex-column align-items-center mt-3">
        <button
          className="btn btn-primary mb-2"
          onClick={calculateCollegeChance}
        >
          Calculate Chance
        </button>
        {Object.keys(chances).length > 0 && roll && (
          <div>
            <h3 className="mt-3">Your Information:</h3>
            {studentData.map((student) => {
              if (parseInt(student.Roll) === parseInt(roll)) {
                return (
                  <p key={student.Roll}>
                    Hey, {student.Name}, Your Total Mark is {student.Marks} &
                    You Obtained GPA {student.Gpa}
                  </p>
                );
              }
              return null;
            })}
            <h3 className="mt-3">College Chances:</h3>
            <div className="card-container">
              {Object.keys(chances).map((college, index) => (
                <Card
                  key={college}
                  className={`card ${index % 2 === 0 ? "even" : "odd"}`}
                >
                  <div className="card-content">
                    <Card.Title className="title">{college}</Card.Title>
                    <Card.Text className="chance">Chance: </Card.Text>
                    <Card.Text className="percentage">
                      {chances[college]}%
                    </Card.Text>
                  </div>
                </Card>
              ))}
            </div>
            <p>
              Each time you change Roll number click on the Calculate Chance
              Button to see the estimated Percentage
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeChanceCalculator;
