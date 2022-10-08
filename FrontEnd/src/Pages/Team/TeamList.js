import React from 'react'
import useTeam from '../Hooks/useTeam'
import TeamCard from './TeamCard'
const TeamList = ({pick}) => {

    const {GetAllTeam, loading, team, error} = useTeam()
    GetAllTeam()
  return (
    <div className='team-list'>
      {loading? 'Loading' : team.map(element=> {
        return(
            <TeamCard key={element.id} teams={element} pick={pick}/>
        )
      })}
    </div>
  )
}

export default TeamList
