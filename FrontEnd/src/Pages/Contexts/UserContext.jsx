import React, { useState } from 'react'
import { createContext } from 'react'

export const userContext = createContext()

export function UserContextProvider({children}) {

    const [user, setUser] = useState( localStorage.getItem('user') || null)

  return(
    <userContext.Provider value={[user, setUser]}>
        {children}
    </userContext.Provider>
  )
}
