import React, { useState, useReducer } from "react";
import Popup from "./Popup";
import Button from "@material-ui/core/Button";
import "./skill.css";

const reducer = (state, action) => {
    const type = action.type;
    const value = action.value;
    switch (type) {
      case "te":
        return { ...state, total: value };
        case "mon":
        return { ...state, mont: value };
      case "desg":
        return { ...state, designation: value };
      case "org":
        return { ...state, organization: value };
        case "from":
        return { ...state, started: value };
        case "st":
        return { ...state, sttill: value };
        case "till":
        return { ...state, working: value };
        case "en":
        return { ...state, end: value };
        case "jobprofile":
        return { ...state, job: value };
      default:
        throw new Error(`Invalid dispatch @${type}`);
    }
  };

function Employment(){
    const [isOpen, setIsOpen] = useState(false);
    const [isSave, setIsSave] = useState(false);
    const [employmentValues, setEmploymentValues] = useState([]);
    
    let initialValue = {
        total: "",
        designation: "",
        organization: "",
        started: "",
        working: "",
        job: "",
      };

      const [state, dispatch] = useReducer(reducer, initialValue);

      const togglePopup = () => {
        setIsOpen(!isOpen);
      };
    
      const handleChange = (e, type) => {
        dispatch({ type, value: e.target.value });
      };
    
      const handleSave = () => {
        setEmploymentValues([...employmentValues, { ...state }]);
        togglePopup();
        setIsSave(true);
      };

    return(
        <div className="pop">
            <input  
                className="pop3"
                type="button"
                value="Add Employments"
                onClick={togglePopup}
            />
        {console.log(employmentValues)}
      <div>
        <table>
          {isSave &&
            employmentValues.map((d, index) => (
              <tbody>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{d.total}</td>
                  <td>{d.designation}</td>
                  <td>{d.organization}</td>
                  <td>{d.started}</td>
                  <td>{d.working}</td>
                  <td>{d.job}</td>
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
                  Total Experience
                </label>
                <div className="exper">
                <select
                  id="exp"
                  value={state.total}
                  onChange={(e) => handleChange(e, "te")}
                  >
                  <option>Years</option>
                  <option>0 years</option>
                  <option>1 year</option>
                  <option>2 year</option>
                  <option>3 year</option>
                  <option>4 year</option>
                  <option>5 year</option>
                  <option>6 year</option>
                  <option>7 year</option>
                  <option>8 year</option>
                  <option>9 year</option>
                </select>
                <select
                  id="exp"
                  value={state.mont}
                  onChange={(e) => handleChange(e, "mon")}
                  >
                  <option>Month</option>
                  <option>1 month</option>
                  <option>2 month</option>
                  <option>3 month</option>
                  <option>4 month</option>
                  <option>5 month</option>
                  <option>6 month</option>
                  <option>7 month</option>
                  <option>8 month</option>
                  <option>9 month</option>
                </select>
                </div>
                <label id="skil" for="skills">
                  Your Designation
                </label>
                <input
                  id="skills"
                  type="text"
                  placeholder="Type your Designation"
                  value={state.designation}
                  onChange={(e) => handleChange(e, "desg")}
                />
                <label id="skil" for="skills">
                  Your Organization
                </label>
                <input
                  id="skills"
                  type="text"
                  placeholder="Type Your Organization"
                  value={state.organization}
                  onChange={(e) => handleChange(e, "org")}
                />
                <label id="skil" for="skills">
                 Started Working From
                </label>
                <div className="exper">
                <select
                  id="skills"
                  value={state.started}
                  onChange={(e) => handleChange(e, "from")}
                  >
                  <option>select year</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                </select>
                <select
                  id="skills"
                  value={state.sttill}
                  onChange={(e) => handleChange(e, "st")}
                  >
                  <option>select month</option>
                  <option>Jan</option>
                  <option>feb</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
                </div>
                <label id="skil" for="skills">
                  Working Till
                </label>
                <div className="exper">
                <select
                  id="skills"
                  value={state.working}
                  onChange={(e) => handleChange(e, "till")}
                  >
                  <option>select year</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                </select>
                <select
                  id="skills"
                  value={state.end}
                  onChange={(e) => handleChange(e, "en")}
                  >
                  <option>select month</option>
                  <option>Jan</option>
                  <option>feb</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </select>
                </div>
                <label id="skil" for="skills">
                  Describe Your Job Profile
                </label>
                <input
                  id="skills"
                  type="text"
                  placeholder="Type Here...."
                  value={state.job}
                  onChange={(e) => handleChange(e, "jobprofile")}
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

export default Employment;