import React from 'react'

function Student(props) {
  return (
    <div>
        <h3>Name : {props.student.name}</h3>
        <h3>Username : {props.student.username}</h3>
        <hr />
    </div>
  )
}

export default Student