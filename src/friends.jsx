import { useEffect, useState } from "react"
import Friend from "./friend"


export default function Friends(){
    const [friends , setfriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setfriends(data))
    },[])
    return (
        <div>
            <h3>Friends: {friends.length}</h3>
            {
              friends.map(friend => <Friend friend={friend}></Friend>)  

            }
        </div>
    )
}