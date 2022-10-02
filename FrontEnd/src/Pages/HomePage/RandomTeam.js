import React from 'react'
import useTeam from '../Hooks/useTeam'

const RandomTeam = () => {

    const {GetAllTeam, team, loading, error} = useTeam()
    GetAllTeam()
    
    const inLoading = loading ? "loading" : team
    const RandomNumber = Math.floor(Math.random() * inLoading.length)
    const lastTeam = inLoading[RandomNumber]

  return (
    <div>
        <div className="img">
            <img src={lastTeam.image} alt={`${lastTeam.name} diagram`} />
        </div>
      <p>Name: {lastTeam.name}</p>
      <p>Title: {lastTeam.title}</p>
      <p>Desc: {lastTeam.desc}</p>
    </div>
  )
}

export default RandomTeam
