// import React from 'react'

export default function Singer({singer}) {
    const {name, age } = singer;
  return (
    <div>
      <h2>Name: {name} </h2>
      <p>Age: {age} </p>
    </div>
  )
}
