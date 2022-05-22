import Box from "@material-ui/core/Box";
import React, { useState, useEffect } from "react";
import Qualification from "./Qualification";
import Skills from "./Skills";
import Project from "./Project";
import Employment from "./Employment";
import Accomplish from "./Accomplish";
import Sample from "./Sample";
import "./stepperform.css";
import Certification from "./Certification";

const StepperForm = () => {
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    // useEffect(()=>{
    // },[])
    const handleSubmit = ()=>{
      console.log("PASS")
      let data = {
        name: "Nilesh",
        date_of_birth: "1997-08-10",
        Gender: "Male",
        phone_number: 9418964156,
        Email: "nilesh@gmail.com",
        Address: "xyz Road, Alwar, India",
        City: "Alwar"
      }
      fetch('http://localhost:8000/api/users/Pdetail/post', {method: 'POST',mode:'cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)}).then((resData)=>{
        
      console.log(resData);
      // return resData;
      return resData.json()
      }).then(res=>{
        console.log("result ", res);
      }).catch(err=>{
        console.log(err)
      })
    }
  return (
    <div className="container">
      <div className="cont">
        <h1>User Profile</h1>
        <div style={{ marginLeft: "2px", marginTop: "50px", width: "65%" }}>
          <Box color="black" bgcolor="white" p={3}>
            <b style={{ color: "black", fontSize: "2rem" }}>
              Enter Personal Details
            </b>
            <form className="form-group">
              <label id="gend">Name</label>
              <input id="nme" placeholder="Enter Your Name" name="name"></input>
              <label id="gend">Date Of Birth</label>
              <input id="dob" type="date" placeholder="Date Of Birth" name="date_of_birth"></input>
              <br></br>
              <label id="gend">Gender</label>
              <select id="name">
                <option>select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <label id="gend">Phone No.</label>
              <input id="number" type="number" placeholder="Phone No."></input>
              <br></br>
              <label id="gend">Email</label>
              <input id="email" type="email" placeholder="Email"></input>
              <br></br>
              <label>Address</label>
              <input id="addr"  placeholder="Enter adddress"></input>
              <br></br>
              <label>Town</label>
              <input id="hme"  placeholder="Enter Hometown"></input>
              <br></br>
              <button onClick={()=>handleSubmit()}> Submit</button>
            </form>
          </Box>
        </div>
        <div style={{ marginLeft: "2px", marginTop: "50px", width: "65%" }}>
          <Box color="black" bgcolor="white" p={2}>
            <b style={{ color: "black", fontSize: "2rem" }}>
              Upload Resume
            </b>
            <form className="frm">
            <input type="file" onChange={handleChange} />
            <img src={file} />
            <button className="del">Delete</button>
            </form>
          </Box>
        </div>
        <div style={{ marginLeft: "2px", marginTop: "50px", width: "65%" }}>
          <Box color="black" bgcolor="white" p={2}>
            <b style={{ color: "black", fontSize: "2rem" }}>
              Enter Employment
            </b>
            <Employment />
          </Box>
        </div>
        <div style={{ marginLeft: "2px", marginTop: "50px", width: "65%" }}>
          <Box color="black" bgcolor="white" p={3}>
            <b style={{ color: "black", fontSize: "2rem" }}>
              Enter Qualification Details
            </b>
            <Qualification />
          </Box>
        </div>
        <div style={{ marginLeft: "2px", marginTop: "50px", width: "65%" }}>
          <Box color="black" bgcolor="white" p={3}>
            <b style={{ color: "black", fontSize: "2rem" }}>Enter Skills</b>
            <Skills />
          </Box>
        </div>
        <div style={{ marginLeft: "2px", marginTop: "50px", width: "65%" }}>
          <Box color="black" bgcolor="white" p={3}>
            <b style={{ color: "black", fontSize: "2rem" }}>Enter Project</b>
            <Project />
          </Box>
        </div>
        <div style={{ marginLeft: "2px", marginTop: "50px", width: "65%"}}>
          <Box color="black" bgcolor="white" p={3}>
            <b style={{ color: "black", fontSize: "2rem" }}>Accomplishments</b>
            <Accomplish />
          </Box>
          <Box color="black" bgcolor="white" p={3} marginTop="1px" >
            <Sample />
          </Box>
          <Box color="black" bgcolor="white" p={3} marginTop="1px" >
            <Certification />
          </Box>
        </div>
        <button className="btn1">
        </button>
      </div>
    </div>
  );
};

export default StepperForm;
