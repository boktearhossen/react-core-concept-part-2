 export default function Friend ({friend}){
    const {name,email} = friend
      return (
         <div>
           <h2>name:{name}</h2>
           <p>age: {email}</p>
         </div>
      )
 }