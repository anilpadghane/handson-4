import React from "react";


const About =()=>{
    return <> 
    <button>Add New Student</button>
    <table className="table caption-top">
    <caption>Student Details</caption>
    
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Course</th>
        <th scope="col">Batch</th>
        <th scope="col">Change</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">John</th>
        <td>26</td>
        <td>MERN</td>
        <td>October</td>
        <td className="edit">Edit</td>
      </tr>
      <tr>
        <th scope="row">Doe</th>
        <td>26</td>
        <td>MERN</td>
        <td>October</td>
        <td className="edit">Edit</td>
      </tr>
      <tr>
        <th scope="row">Biden</th>
        <td>26</td>
        <td>MERN</td>
        <td>October</td>
        <td className="edit">Edit</td>
      </tr>
      <tr>
        <th scope="row">Barar</th>
        <td>26</td>
        <td>MERN</td>
        <td>October</td>
        <td className="edit">Edit</td>
      </tr>
      <tr>
        <th scope="row">Elent</th>
        <td>26</td>
        <td>MERN</td>
        <td>October</td>
        <td className="edit">Edit</td>
      </tr>
    </tbody>
  </table></>
};

export default About;