import { useState } from "react";


export default function Counter(){
    const [count, setCount] = useState(0)
    
    const handleAdd =()=>{
        const addcount = count +1
        setCount(addcount)
    }
    const handleReduce =()=> {
      const remove = count -1
      setCount(remove)
    }

    return (
        <div style={{border:'2px solid green'}}> 
            <h3 >counter:{count}</h3>
             <button onClick={handleAdd}>add</button>
             <button onClick={handleReduce}>reduce</button>
        </div>
    )
}