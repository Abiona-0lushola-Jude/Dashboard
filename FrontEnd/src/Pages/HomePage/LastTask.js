import React from 'react'

const LastTask = ({task}) => {
  return (
    <div>
      <p>To: {task.to}</p>
      <p>Desc: {task.desc}</p>
      <p>Date: {task.date}</p>
    </div>
  )
}

export default LastTask
