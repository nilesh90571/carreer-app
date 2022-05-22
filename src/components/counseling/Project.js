import React, { useState, useReducer } from "react";
import Popup from "./Popup";
import Button from "@material-ui/core/Button";
import "./skill.css";

const reducer = (state, action) => {
  const type = action.type;
  const value = action.value;
  switch (type) {
    case "pot":
      return { ...state, project: value };
    case "dop":
      return { ...state, detail: value };
    case "pl":
      return { ...state, location: value };
      case "ts":
      return { ...state, team: value };
      case "tr":
      return { ...state, role: value };
      case "skilluse":
      return { ...state, skill: value };
    default:
      throw new Error(`Invalid dispatch @${type}`);
  }
};

function Project() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [projectValues, setProjectValues] = useState([]);

  let initialValue = {
    project: "",
    detail: "",
    location: "",
    team: "",
    role: "",
    skill: "",
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e, type) => {
    dispatch({ type, value: e.target.value });
  };

  const handleSave = () => {
    setProjectValues([...projectValues, { ...state }]);
    togglePopup();
    setIsSave(true);
  };
  return (
    <div className="pop">
      <h2>Project</h2>
      <input
        className="pop2"
        type="button"
        value="Add Project"
        onClick={togglePopup}
      />
      {console.log(projectValues)}
      <div>
        <table>
          {isSave &&
            projectValues.map((d, index) => (
              <tbody>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{d.project}</td>
                  <td>{d.detail}</td>
                  <td>{d.location}</td>
                  <td>{d.team}</td>
                  <td>{d.role}</td>
                  <td>{d.skill}</td>
                  <td>
                    <button onClick={togglePopup}>Edit</button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
      {isOpen && (
        <Popup
          content={
            <>
              <form class="form-group">
                <label id="skil" for="skills">
                  Project Title
                </label>
                <input
                  id="skills"
                  type="text"
                  placeholder="Enter Project Title"
                  value={state.project}
                  onChange={(e) => handleChange(e, "pot")}
                />
                <label id="skil" for="skills">
                  Details of Project 
                </label>
                <input
                  id="skills"
                  type="text"
                  placeholder="Type Here..."
                  value={state.detail}
                  onChange={(e) => handleChange(e, "dop")}
                />
                <label id="skil" for="skills">
                  Project Location
                </label>
                <input
                  id="skills"
                  type="text"
                  placeholder="Enter Project Location"
                  value={state.location}
                  onChange={(e) => handleChange(e, "pl")}
                />
                <label id="skil" for="skills">
                  Team Size
                </label>
                <select
                  id="skills"
                  value={state.team}
                  onChange={(e) => handleChange(e, "ts")}
                  >
                  <option>select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
                <label id="skil" for="skills">
                  Team Role
                </label>
                <select
                  id="skills"
                  value={state.role}
                  onChange={(e) => handleChange(e, "tr")}
                  >
                  <option>select</option>
                  <option>FrontEnd</option>
                  <option>BackEnd</option>
                  <option>Team Leader</option>
                  <option>Project Leader</option>
                </select>
                <label id="skil" for="skills">
                  Skill used
                </label>
                <input
                  id="skills"
                  type="text"
                  placeholder="Enter Skill Used"
                  value={state.skill}
                  onChange={(e) => handleChange(e, "skilluse")}
                />
              </form>
              <div className="btn">
                <Button onClick={togglePopup}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Project;
