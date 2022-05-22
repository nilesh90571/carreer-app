import "./table.css";

const data = [
  { 
    age: 15, 
    qualification: "10th", 
    specialisation: "Genral", 
    technon: "",
    techskill: "",
    nontech: "",
    jobexp: "",
    jobposition: "",
    furthereducation: "", 
    furtherskill: "", 
    furtherjob: "", 
  },
  { 
    age: 17, 
    qualification: "12th", 
    specialisation: "PCM", 
    technon: "",
    techskill: "",
    nontech: "",
    jobexp: "",
    jobposition: "",
    furthereducation: "Computer", 
    furtherskill: "", 
    furtherjob: "", 
  },
  { 
    age: 21, 
    qualification: "B.Tech", 
    specialisation: "IT", 
    technon: "Tech",
    techskill: "ReactJs  HTML",
    nontech: "Public Speaking",
    jobexp: "6Month",
    jobposition: "React Developer",
  },
]

// const db =
//   {
//   "sug1": [
//     {
      
//       "furthereducation": ["M.Tech", "ME" , "MBA"],
//       "furtherskill": ["Python", "Angular"],
//       "furtherjob": ["Python Developer" , "Android Developer"]
//     }
//   ]
// }

function Table() {
  return (
    <div className="App">
      <table className="tab">
          <tr>
            <th className="tab1" >Age</th>
            <th className="tab1">Qualification</th>
            <th className="tab1">Specialisation</th>
            <th className="tab1">Tech/Non-Tech</th>
            <th className="tab1">Tech Skill</th>
            <th className="tab1">Non-Tech Skill</th>
            <th className="tab1">Job Experience</th>
            <th className="tab1">Job Position</th>
            <th className="tab1">Further Path based on Education</th>
            <th className="tab1">Further Path based on Skill</th>
            <th className="tab1">Further Path based on Job</th>
          </tr>
          {data.map((val, key) => (
            <tr key={key}>
              <td className="tab1">{val.age}</td>
              <td className="tab1">{val.qualification}</td>
              <td className="tab1">{val.specialisation}</td>
              <td className="tab1">{val.technon}</td>
              <td className="tab1">{val.techskill}</td>
              <td className="tab1">{val.nontech}</td>
              <td className="tab1">{val.jobexp}</td>
              <td className="tab1">{val.jobposition}</td>
              
            </tr>
          ))}

      </table>
    </div>
  );
}

export default Table;




