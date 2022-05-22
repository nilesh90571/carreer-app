import React, { useState, useReducer } from "react";
import Popup from "./Popup";
import Button from "@material-ui/core/Button";
import "./qualification.css";


const reducer = (state, action) => {
  const type = action.type;
  const value = action.value;
  switch (type) {
    case "edu":
      return { ...state, std: value };
    case "yrs":
      return { ...state, year: value };
    case "collg":
      return { ...state, college: value };
    case "spl":
      return { ...state, specializaion: value };
    case "percnt":
      return { ...state, percentage: value };
    default:
      throw new Error(`Invalid dispatch @${type}`);
  }
};

function Qualification() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [eduValues, setEduValues] = useState([]);

  let initialValue = {
    std: "",
    year: "",
    college: "",
    specializaion: "",
    percentage: "",
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e, type) => {
    dispatch({ type, value: e.target.value });
  };

  const handleSave = () => {
    setEduValues([...eduValues, { ...state }]);
    togglePopup();
    setIsSave(true);

    axios
    .post("http://127.0.0.1:8000/api/user/eduaction/post/", {
      education: state.std,
      passing_year: state.year,
      School_College: state.college,
      Specializaion: state.specializaion,
      percentage: state.percentage,
    })
    .then((res) => {
        setState({
          education: "",
          passing_year: "",
          School_College: "",
          Specializaion: "",
          percentage: "",
        });
    })
    .catch((err) => {});
  };
  return (
    <div>
      <div className="pop">
        <h2>Education</h2>
        <input
          className="pop1"
          type="button"
          value="Add Education"
          onClick={togglePopup}
        />
        {console.log(eduValues)}
              <div>
                <table>
                  {isSave &&
                  eduValues.map((d, index) => (
                  <tbody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{d.std}</td>
                      <td>{d.college}</td>
                      <td>{d.year}</td>
                      <td>
                        <button>Edit</button>
                      </td>
                    </tr>
                  </tbody>
                  ))}
                </table>
             </div>
      </div>
      {isOpen && (
        <Popup
          content={
            <>
              <form class="form-group">
                <label id="edu" for="education">
                  Education
                </label>
                <select
                  id="education"
                  value={state.std}
                  onChange={(e) => handleChange(e, "edu")}
                >
                  <option>select</option>
                  <option>upto 5</option>
                  <option>6th - 9th</option>
                  <option>10th</option>
                  <option>12th</option>
                  <option>B.Tech/B.E</option>
                  <option>Master's/Post-Graduation</option>
                  <option>Doctorate/PhD</option>
                </select>
                <br></br>
                <label id="edu" for="year">
                  Passing Year
                </label>
                <select
                  id="year"
                  value={state.year}
                  onChange={(e) => handleChange(e, "yrs")}
                >
                  <option>select</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                </select>
                <label id="edu">School/College</label>
                <input
                  id="s_name"
                  type="text"
                  placeholder="School/College"
                  value={state.college}
                  onChange={(e) => handleChange(e, "collg")}
                ></input>
                <label id="edu"> Specialization</label>
                <input
                  id="specialization"
                  type="text"
                  placeholder=" specialization"
                  value={state.specializaion}
                  onChange={(e) => handleChange(e, "spl")}
                ></input>
                <label id="edu"> Percentage</label>
                <input
                  id="percent"
                  type="number"
                  placeholder=" Percentage"
                  value={state.percentage}
                  onChange={(e) => handleChange(e, "percnt")}
                ></input>
              </form>
              <div className="btn">
                <Button type="submit" onClick={togglePopup}>
                  Cancel
                </Button>
                <Button type="submit" onClick={handleSave}>
                  Save
                </Button>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Qualification;
