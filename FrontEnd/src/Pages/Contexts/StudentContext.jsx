import React, { useState } from 'react'
import { createContext } from 'react'


export const StudentContext = createContext()

export  function StudentContextProvider({children}) {


    const [students, setStudents] = useState([])


  return (
    <StudentContext.Provider value={[students, setStudents]}>
        {children}
    </StudentContext.Provider>
  )
}
