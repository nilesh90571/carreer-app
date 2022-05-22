import React, { useState, useReducer } from "react";
import Popup from "./Popup";
import Button from "@material-ui/core/Button";
import "./skill.css";

const reducer = (state, action) => {
  const type = action.type;
  const value = action.value;
  switch (type) {
    case "tech":
      return { ...state, tech: value };
    case "non":
      return { ...state, nontech: value };
    case "exp":
      return { ...state, experience: value };
    default:
      throw new Error(`Invalid dispatch @${type}`);
  }
};

function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [skillValues, setSkillValues] = useState([]);

  let initialValue = {
    tech: "",
    nontech: "",
    experience: "",
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e, type) => {
    dispatch({ type, value: e.target.value });
  };

  const handleSave = () => {
    setSkillValues([...skillValues, { ...state }]);
    togglePopup();
    setIsSave(true);
  };
  return (
    <div className="pop">
      <h2>Skills</h2>
      <input
        className="pop2"
        type="button"
        value="Add Skills"
        onClick={togglePopup}
      />
      {console.log(skillValues)}
      <div>
        <table>
          {isSave &&
            skillValues.map((d, index) => (
              <tbody>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{d.tech}</td>
                  <td>{d.nontech}</td>
                  <td>{d.experience}</td>
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
                  Tech Skills
                </label>
                <select
                  id="skills"
                  value={state.tech}
                  onChange={(e) => handleChange(e, "tech")}
                >
                  <option>HTML</option>
                  <option>CSS</option>
                  <option>JAVASCRIPT</option>
                  <option>REACTJS</option>
                  <option>ANGULARJS</option>
                  <option>VUEJS</option>
                  <option>FIREBASE</option>
                </select>
                <label id="skil" for="non-tech">
                  Non-Tech
                </label>
                <select
                  id="non-tech"
                  value={state.nontech}
                  onChange={(e) => handleChange(e, "non")}
                >
                  <option>select</option>
                  <option>HR Management</option>
                  <option>Junior Developer</option>
                  <option>BusinessMan</option>
                </select>
                <label id="ex" for="experience">
                  Experience
                </label>
                <input
                  id="experience"
                  type="number"
                  placeholder=" experience"
                  value={state.experience}
                  onChange={(e) => handleChange(e, "exp")}
                ></input>
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

export default Skills;
