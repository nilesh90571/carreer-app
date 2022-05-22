import React, { useState, useReducer } from "react";
import Popup from "./Popup";
import Button from "@material-ui/core/Button";
import "./skill.css";

const reducer = (state, action) => {
  const type = action.type;
  const value = action.value;
  switch (type) {
    case "cn":
      return { ...state, certi: value };
    case "co":
      return { ...state, comple: value };
    case "ur":
      return { ...state, url: value };
    default:
      throw new Error(`Invalid dispatch @${type}`);
  }
};

function Certification() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [certificationValues, setCertificationValues] = useState([]);

  let initialValue = {
    url: "",
    certi: "",
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e, type) => {
    dispatch({ type, value: e.target.value });
  };

  const handleSave = () => {
    setCertificationValues([...certificationValues, { ...state }]);
    togglePopup();
    setIsSave(true);
  };
  return (
    <div className="pop">
      <h2>Certification</h2>
      <input
        className="pop2"
        type="button"
        value="Add"
        onClick={togglePopup}
      />
      {console.log(certificationValues)}
      <div>
        <table>
          {isSave &&
            certificationValues.map((d) => (
              <tbody>
                <tr>
                  <td>{d.url}</td>
                  <td>{d.certi}</td>
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
                  Certification Name
                </label>
                <input
                  id="skills"
                  type="text"
                  placeholder="Please Enter Certification Name "
                  value={state.certi}
                  onChange={(e) => handleChange(e, "cn")}
                />
                <label id="skil" for="skills">
                  Certification Completion ID
                </label>
                <input
                  id="skills"
                  type="text"
                  placeholder="Enter your Certification Completion ID"
                  value={state.comple}
                  onChange={(e) => handleChange(e, "co")}
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

export default Certification;
