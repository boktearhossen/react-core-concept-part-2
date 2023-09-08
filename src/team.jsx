import { useState } from "react"



export default function Team(){

    const [team, setTeam] =useState(11)
    const handleAdd =() => {
        const addNew = team +1
        setTeam(addNew)
    }
   const handleRemove =() => {
      setTeam(team -1)
   }
    const teamStyle ={
        border:'2px solid tomato',
        padding: '15px',
        margin:'15px'
    }
    return (
        <div style={teamStyle}>
           <h3>players:{team}  </h3>
           <button onClick={handleAdd }>Add</button>
           <button onClick={handleRemove}>Remove</button>
        </div>
    )
}