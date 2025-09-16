import React,{useState} from 'react'

function ToDO() {
    const[data,setData]=useState("");
    const[task,setTask]=useState([]);
    const[editIndex,setEditIndex]=useState(null)

    const AddData=()=>{
        if(data.trim()!==""){
            if(editIndex !==null){
                const updatedTask=[...task];
                updatedTask[editIndex]=data;
                setTask(updatedTask);
                setEditIndex(null); 
            }else{
                setTask([...task,data])
            }
            setData("");
        }
    };
    const handleEdit=(index)=>{
        setData(task[index]);
        setEditIndex(index);
    }
    const handleDelete=(index)=>{
        const newTask = task.filter((_, i)=> i !==index);
        setTask(newTask);
    }

  return (
    <div>
      <h2>Simple To-DO</h2>
      <input 
       type="text"
       placeholder='Enter the task'
       value={data}
       onChange={(e)=>setData(e.target.value)}/>
       <button onClick={AddData}>
            {editIndex !==null?"update task":"add task"}

       </button>
      <ul>
        {task.map((item,index)=>(
            <li key={index}>
                {item}{" "}
                <button onClick={()=> handleEdit(index)}>Edit</button>
                <button onClick={()=> handleDelete(index)}>Delete</button>

            </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDO
