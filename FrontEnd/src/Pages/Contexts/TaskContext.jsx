import { useState } from 'react'
import { createContext } from 'react'

export const taskContext = createContext()

    

export  function TaskContextProvider({ children}) {

    const [task, setTask] = useState()

  return (
    <taskContext.Provider value={[task, setTask]}>
        {children}
    </taskContext.Provider>
  )
}
