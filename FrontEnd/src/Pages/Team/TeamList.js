import React from 'react'
import useTeam from '../Hooks/useTeam'
import TeamCard from './TeamCard'
const TeamList = () => {

    const {GetAllTeam, loading, team, error} = useTeam()
    GetAllTeam()
  return (
    <div className='team-list'>
      {loading? 'Loading' : team.map(element=> {
        return(
            <TeamCard key={element.id} teams={element}/>
        )
      })}
    </div>
  )
}

export default TeamList
