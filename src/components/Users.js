import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
 const [users,setUsers]=useState([]);

  useEffect(()=>{
     axios("https://jsonplaceholder.typicode.com/users")  
      .then(res=>setUsers(res.data))
      .catch(err=>console.log(err))

  },[])
 
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user=>(
          <li key={user.id}>
            <Link  to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default Users