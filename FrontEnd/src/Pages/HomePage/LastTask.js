import React from 'react'

const LastTask = ({task}) => {
  return (
    <div>
      <p className='my-3'>To: {task.to}</p>
      <p className='my-3'>Desc: {task.desc}</p>
      <p className='my-3'>Date: {task.date}</p>
    </div>
  )
}

export default LastTask
