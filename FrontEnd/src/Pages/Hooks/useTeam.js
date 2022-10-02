import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { teamContext } from "../Contexts/TeamContext"

export default function useTeam() {

    const [loading, setLoading] = useState(true)
    const [team, setTeam] = useContext(teamContext)
    const [error, setError] = useState('')
 
 
    const GetAllTeam = ()=> {
        useEffect(()=>{
            axios.get('http://localhost:6001/team')
            .then(res => {
                setLoading(false)
                setTeam(res.data)
                setError('')
            })
            .catch(err=>{
                setLoading(false)
                setTeam([])
                setError("Error has occured!!!")
            })
        }, [])
    }

    const postTeam = (post) => {
        axios.post('http://localhost:6001/team', post)
        .then(res=> {
            setLoading(false)
            setTeam(prev=>{
                return [
                    ...prev,
                    post
                ]
            })
            setError('')
        })
        .catch(err=>{
            setLoading(false)
            setTeam([])
            setError("Member cannot be posted")
        })
    }


    const deleteTeam = (value)=> {
        axios.delete(`http://localhost:6001/team/${value}`)
        .then(res=> {
            setLoading(false)
            setTeam(team.filter((element)=> element.id !== value))
            // setStudent(students.filter((student)=> student.id !== value))
            setError('')
        })
        .catch(err=>{
            setLoading(false)
            setTeam([])
            setError("Cannot delete Member!")
        })
    }
 
    const updateTeam = (post) => {
        axios.put('http://localhost:6001/team',post )
        .then(res=> {
            setLoading(false)
            setTeam(prev=>{
                return [
                    ...prev,
                    post
                ]
            })
            setError('')
        })
        .catch(err=>{
            setLoading(false)
            setTeam([])
            setError("Cannot delete Member!")
        })
    }
 
 
    return {GetAllTeam, loading, error, team, postTeam, deleteTeam, updateTeam}
}
