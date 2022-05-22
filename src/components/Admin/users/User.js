// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// const User = () => {
//     const [user, setUser] = useState({
//         question: "",
//         optionA: "",
//         optionB: "",  
//         optionC: "",
//         optionD: "",
//         rightans: "",
//         score: ""
//       });
//   const { id } = useParams();
//   useEffect(() => {
//     loadUser();
//   }, []);
//   const loadUser = async () => {
//     const res = await axios.get(`http://localhost:3003/Questions/${id}`);
//     setUser(res.data);
//   };
//   return (
//     <div className="container py-4">
//       <Link className="btn btn-primary" to="/">
//         back to Home
//       </Link>
//       <h1 className="display-4">User Id: {id}</h1>
//       <hr />
//       <ul className="list-group w-50">
//         <li className="list-group-item">question: {user.question}</li>
//         <li className="list-group-item">optionA: {user.optionA}</li>
//         <li className="list-group-item">OptionB: {user.optionB}</li>
//         <li className="list-group-item">OptionC: {user.optionC}</li>
//         <li className="list-group-item">OptionD: {user.optionD}</li>
//         <li className="list-group-item">rightans: {user.rightans}</li>
//         <li className="list-group-item">score: {user.score}</li>
//       </ul>
//     </div>
//   );
// };

// export default User;