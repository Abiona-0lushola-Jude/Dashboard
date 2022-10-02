import { useContext } from 'react'
import { taskContext } from '../Contexts/TaskContext'

export default function useMessage() {

    const [task, setTask] = useContext(taskContext)

    function getMesage(){

        const loading = !task ? "Loading" : task
        const storeMessage = localStorage.setItem('message', loading.length)
        
        const storeNum = task.length - localStorage.getItem('message')

        console.log(storeNum)
    }



  return{getMesage}
}
