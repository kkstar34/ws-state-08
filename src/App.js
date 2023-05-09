

import React, { useEffect, useState } from 'react'

import AddStudent from './components/AddStudent';
import Student from './components/Student';
import axios  from 'axios';

function App() {

  const [students, setStudent] = useState([
    
  ])

  function addStudent(name){
    let newStudents = [...students]; 
    newStudents.push({ name : name})
    setStudent(newStudents);
  }

  async function fetchData(){
    let users = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(users);
    setStudent(users.data);
  }

  useEffect( ()=>{
    fetchData();
  }, [])
 
  return (
    <div>
        <AddStudent addStudent={addStudent}/>
        {students && students.map((student) =>{
          return <Student student={student}/>
        })}
    </div>
  )
}

export default App