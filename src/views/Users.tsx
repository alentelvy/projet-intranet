import React, { useEffect, useState } from 'react'
import instance from '../services/axios';
import axios from "axios";
import {getData} from '../services/userService';


const Users = () => {

  const [users, setUsers] = useState([]);

    useEffect(() => {
        const res  = getData("collaborateurs")
        .then((data) => {
          console.log(data);
          setUsers(data)
        });
  
      }, []);

  console.log("---------", users)
  return (

    <>
    {
      users.map(user => 
      <div key={user.id}> {user.firstname}</div>
      )
    }
  </>
  )
}

export default Users