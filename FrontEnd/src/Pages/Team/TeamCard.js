import React from 'react'
import useTeam from '../Hooks/useTeam'

const TeamCard = ({teams}) => {
    const {deleteTeam} = useTeam()

    function onDelete(id){
        deleteTeam(id)
    }

  return (
    <div className='team-card border'>
        <div className="img">
            <img src={teams.image} alt={`${teams.name} diagram`} />
        </div>
        <div>
          <h5 className='by'>{teams.name}</h5>
          <p>Title: {teams.title}</p>
          <h6>Desc: {teams.desc}</h6>
          <div className="btn-grouping">
            <button className='btn btn-sm btn-primary'>Update</button>
            <button className='btn btn-sm btn-danger' onClick={()=> onDelete(teams.id)}>Delete</button>
          </div>
        </div>
      
      
    </div>
  )
}

export default TeamCard
