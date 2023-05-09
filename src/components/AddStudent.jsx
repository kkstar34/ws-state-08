import React, { useState } from 'react'

function AddStudent(props) {

    const [typingName , setTypingName] = useState('');
    const handleChange= (e) =>{
        setTypingName(e.target.value)
    }   

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addStudent(typingName)
    }

  return (
    <div>

        <form action="">
            <input type="text" onChange={handleChange}/>
            <button onClick={handleSubmit}>submit</button>
        </form>
    </div>
  )
}

export default AddStudent