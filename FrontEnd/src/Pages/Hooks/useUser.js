import axios from "axios"
import { useContext, useState } from "react"
import { userContext } from "../Contexts/UserContext"

export default function useUser() {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useContext(userContext)
    const [error, setError] = useState(null)



    async function postUser(value){
        try {
            await axios.post("http://localhost:6001/api/register", value)
            setLoading(false)
            setError(null)
        } catch (err) {
            setLoading(false)
            setUser(null)
            setError(err.response.data)
        }
    }


    async function loginUser(value){
        try {
            const res = await axios.post("http://localhost:6001/api/login", value)
            setLoading(false)
            setUser(res.data)
            localStorage.setItem('user', res.data.username)
            setError(null)
        } catch (err) {
            setLoading(false)
            setUser(null)
            setError(err.response.data)
            console.log(error)
            console.log(localStorage.getItem('user'))
        }
    }

    async function signOut(value){
        try {
            const res = await axios.post("http://localhost:6001/api/signout", value)
            setLoading(false)
            setUser(null)
            setError(null)
            localStorage.clear('user')
        } catch (err) {
            setLoading(false)
            setUser(null)
            setError(err.response.data)
        }
    }




  return {postUser, loading, user, error, setError, loginUser, signOut}
}
