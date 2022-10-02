import React from 'react'
import TeamForm from './TeamForm'
import TeamList from './TeamList'

const TeamHome = () => {
  return (
    <div>
      <h1>Welcome to Team Page</h1>
      <div className="row container-md">
        <div className="col-8 team-home">
          <div >
            <TeamList />
          </div>
        </div>
        <div className="col-4">
         <TeamForm />
        </div>
      </div>
    </div>
  )
}

export default TeamHome
