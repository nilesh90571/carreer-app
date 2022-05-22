// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
// import "./user.css";

// const AddUser = () => {
//   let navigate = useNavigate();
//   const [user, setUser] = useState({
//     qualification: "",
//     specialisation: "",
//     technon: "",
//     techskill: "",
//     nontech: "",
//     jobexp: "",
//     jobposition: "",
//     furthereducation: "",
//     furtherskill: "",
//     furtherjob: "",
//   });

//   const {
//     qualification,
//     specialisation,
//     technon,
//     techskill,
//     nontech,
//     jobexp,
//     jobposition,
//   } = user;
//   const handleChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:3003/Questions", user);
//     let path = `/Home`;
//     navigate(path);
//   };
//   return (
//     <div className="container">
//       <h2>Add A User</h2>
//       <form onSubmit={(e) => onSubmit(e)}>
//         <div className="contain">
//           <form className="form-group">
//             <label id="qual" for="qualification">
//               Qualification
//             </label>
//             <select
//               id="qualification"
//               value={qualification}
//               onChange={(e) => handleChange(e)}
//             >
//               <option>select</option>
//               <option>upto 5</option>
//               <option>6th - 9th</option>
//               <option>10th</option>
//               <option>12th</option>
//               <option>B.Tech/B.E</option>
//               <option>Master's/Post-Graduation</option>
//               <option>Doctorate/PhD</option>
//             </select>
//           </form>
//           <div className="form-group">
//             <label id="qual" for="qualification">
//               specialisation
//             </label>
//             <select
//               id="specialisation"
//               value={specialisation}
//               onChange={(e) => handleChange(e)}
//             >
//               <option>select</option>
//               <option>upto 5</option>
//               <option>6th - 9th</option>
//               <option>10th</option>
//               <option>12th</option>
//               <option>B.Tech/B.E</option>
//               <option>Master's/Post-Graduation</option>
//               <option>Doctorate/PhD</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label id="qual" for="qualification">
//             Tech/Non-Tech
//             </label>
//             <select
//               id="technon"
//               value={technon}
//               onChange={(e) => handleChange(e)}
//             >
//               <option>select</option>
//               <option>Tech</option>
//               <option>Non-Tech</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label id="qual" for="qualification">
//             Tech Skill
//             </label>
//             <select
//               id="techskill"
//               value={techskill}
//               onChange={(e) => handleChange(e)}
//             >
//               <option>select</option>
//               <option>upto 5</option>
//               <option>6th - 9th</option>
//               <option>10th</option>
//               <option>12th</option>
//               <option>B.Tech/B.E</option>
//               <option>Master's/Post-Graduation</option>
//               <option>Doctorate/PhD</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label id="qual" for="qualification">
//             Non-Tech Skill
//             </label>
//             <select
//               id="nontech"
//               value={nontech}
//               onChange={(e) => handleChange(e)}
//             >
//               <option>select</option>
//               <option>upto 5</option>
//               <option>6th - 9th</option>
//               <option>10th</option>
//               <option>12th</option>
//               <option>B.Tech/B.E</option>
//               <option>Master's/Post-Graduation</option>
//               <option>Doctorate/PhD</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label id="qual" for="qualification">
//             Job Experience
//             </label>
//             <select
//               id="jobexp"
//               value={jobexp}
//               onChange={(e) => handleChange(e)}
//             >
//               <option>select</option>
//               <option>upto 5</option>
//               <option>6th - 9th</option>
//               <option>10th</option>
//               <option>12th</option>
//               <option>B.Tech/B.E</option>
//               <option>Master's/Post-Graduation</option>
//               <option>Doctorate/PhD</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label id="qual" for="qualification">
//             Job Position
//             </label>
//             <select
//               id="jobposition"
//               value={jobposition}
//               onChange={(e) => handleChange(e)}
//             >
//               <option>select</option>
//               <option>upto 5</option>
//               <option>6th - 9th</option>
//               <option>10th</option>
//               <option>12th</option>
//               <option>B.Tech/B.E</option>
//               <option>Master's/Post-Graduation</option>
//               <option>Doctorate/PhD</option>
//             </select>
//           </div>
//           <br></br>
//           <button className="user">Add User</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddUser;
