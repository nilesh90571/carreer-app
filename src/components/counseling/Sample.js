import React, { useState, useReducer } from "react";
import Popup from "./Popup";
import Button from "@material-ui/core/Button";
import "./skill.css";

const reducer = (state, action) => {
  const type = action.type;
  const value = action.value;
  switch (type) {
    case "wt":
      return { ...state, worktit: value };
    case "ur":
      return { ...state, url: value };
    case "desc":
      return { ...state, descri: value };
    default:
      throw new Error(`Invalid dispatch @${type}`);
  }
};

function Sample() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [sampleValues, setSampleValues] = useState([]);

  let initialValue = {
    url: "",
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e, type) => {
    dispatch({ type, value: e.target.value });
  };

  const handleSave = () => {
    setSampleValues([...sampleValues, { ...state }]);
    togglePopup();
    setIsSave(true);
  };
  return (
    <div className="pop">
      <h2>Sample Work</h2>
      <input
        className="pop2"
        type="button"
        value="Add"
        onClick={togglePopup}
      />
      {console.log(sampleValues)}
      <div>
        <table>
          {isSave &&
            sampleValues.map((d) => (
              <tbody>
                <tr>
                  <td>{d.url}</td>
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
                  Work Title
                </label>
                <input
                  id="skills"
                  type="text"
                  placeholder="Enter Work Title"
                  value={state.worktit}
                  onChange={(e) => handleChange(e, "wt")}
                />
                <label id="skil" for="skills">
                  URL
                </label>
                <input
                  id="skills"
                  type="text"
                  placeholder="Enter URL Here..."
                  value={state.url}
                  onChange={(e) => handleChange(e, "ur")}
                />
                <label id="skil" for="skills">
                  Description
                </label>
                <input
                  id="skills"
                  type="text"
                  placeholder="Type Here..."
                  value={state.descri}
                  onChange={(e) => handleChange(e, "desc")}
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

export default Sample;
