import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const teamContext = createContext()


export  function TeamContextProvider({children}) {
    const [team, setTeam] = useState()


  return (
    <teamContext.Provider value={[team, setTeam]}>
        {children}
    </teamContext.Provider>
  )
}
