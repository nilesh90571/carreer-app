// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";

// const EditUser = () => {
//   let navigate = useNavigate();
//   const { id } = useParams();
//   const [user, setUser] = useState({
//     question: "",
//     optionA: "",
//     optionB: "",  
//     optionC: "",
//     optionD: "",
//     rightans: "",
//     score: ""
//   });

//   const { question, optionA, optionB, optionC, optionD, rightans, score } = user;
//   const onInputChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.put(`http://localhost:3003/Questions/${id}`, user);
//     let path = `/Home`; 
//     navigate(path);
//   };

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:3003/Questions/${id}`);
//     setUser(result.data);
//   };
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Edit A User</h2>
//         <form onSubmit={e => onSubmit(e)}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Question"
//               name="question"
//               value={question}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your OptionA"
//               name="optionA"
//               value={optionA}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your OptionB"
//               name="optionB"
//               value={optionB}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your OptionC"
//               name="optionC"
//               value={optionC}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your OptionD"
//               name="optionD"
//               value={optionD}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Right Answer"
//               name="rightans"
//               value={rightans}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Score"
//               name="score"
//               value={score}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <button className="btn btn-primary btn-block">Update User</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditUser;