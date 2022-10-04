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
            setError(null)
            console.log(error)
        } catch (err) {
            setLoading(false)
            setUser(null)
            setError(err.response.data)
        }
    }






  return {postUser, loading, user, error, setError, loginUser}
}
