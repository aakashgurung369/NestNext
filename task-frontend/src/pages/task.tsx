import axios from "axios"
import { useState , useEffect } from "react";

const fetchTask = async () => {
    const res = await axios.get(
        'http://localhost:3000/task'
    );
    return res
};

const createTask = async (data:any) => {
    const res = await axios.post(
        'http://localhost:3000/task', data
    );
    return res
}
export default function TaskPage() {
    const [tasks, setTasks] = useState<any>()

    const [taskName, setTaskName] = useState("")

    useEffect(()=>{
        fetchTask().then((task)=>setTasks(task.data))
    },[])
    const handleCreateTask = ()=>{
        createTask({taskName: taskName, taskStatus: false})
    }
  return(
    <div>Task App in NestJS and NextJS
        {
            tasks && tasks.map((task:any)=>(
                <div key={task}>{task.taskName}</div>
            ))
        }
        <input value={taskName} onChange={(e)=> setTaskName(e.target.value)}/>
            <button onClick={handleCreateTask}>Create task</button>
    </div>
  )
}
