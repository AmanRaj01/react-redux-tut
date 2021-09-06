import React from 'react'

const User = (props) => {
  const { data } = props
  return (
    <div>
      <h1>User Component</h1>
      <h3>
        {data.name} - {data.age}
      </h3>
    </div>
  )
}

export default User
