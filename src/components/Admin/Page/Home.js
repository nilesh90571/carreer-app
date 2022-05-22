// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Navbar from "./NavBar";

// const Home = () => {
//   const [Questions, setUser] = useState([]);

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("http://localhost:3003/Questions");
//     setUser(result.data.reverse());
//   };
//   const deleteUser = async id => {
//     await axios.delete(`http://localhost:3003/Questions/${id}`);
//     loadUsers();
//   };
//   return (
//     <div className="cont">
//       <Navbar />
//       <div>
//         <table className="tabu" >
//           <thead className="tabbu">
//             <tr>
//               <th >#</th>
//               <th >Qualification</th>
//               <th>Specialization</th>
//               <th>Tech/Non-Tech</th>
//               <th>Tech Skill</th>
//               <th>Non-Tech Skill</th>
//               <th>Job Experience</th>
//               <th>Job Position</th>
//               <th>Further Path based on Education</th>
//               <th>Further Path based on Skill</th>
//               <th>Further Path based on Job</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody className="tabu">
//             {Questions.map((user, index) => (
//               <tr>
//                 <th className="row">{index + 1}</th>
//                 <td>{user.qualification}</td>
//                 <td>{user.specialisation}</td>
//                 <td>{user.technon}</td>
//                 <td>{user.techskill}</td>
//                 <td>{user.nontech}</td>
//                 <td>{user.jobexp}</td>
//                 <td>{user.jobposition}</td>
//                 <td>{user.furthereducation}</td>
//                 <td>{user.furtherskill}</td>
//                 <td>{user.furtherjob}</td>
//                 <td>
//                  <button> 
//                 <Link
//                     className="bttn"
//                     to={`/Admin/users/edit/${user.id}`}
//                   >
//                     Edit
//                   </Link>
//                   </button>
//                 <button  className="button" onClick={() => deleteUser(user.id)}>Delete</button>
//                 </td>
//               </tr>  
//             ))}
//           </tbody>      
//         </table>
//       </div>
//     </div>
//   );
// }
// export default Home;


