import React from 'react';
import { useEffect, useState } from 'react';
import UserCount from '../UserCount/UserCount';
import UserShow from '../UsersShow/UserShow';
import './People.css'


const People = () => {
    const [users, setUsers] = useState([]);
    const [added, setAdded] = useState([]);

    useEffect(() => {
      fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => setUsers(data.results))
    },[])

    const handleAdded = (e) => {
            setAdded([...added,e]);
            
    }
    return (
        <div className="people">
            <div className="userShow">
            {
                users.map(user => 
                    <UserShow  handleAdded = {handleAdded} user={user}></UserShow>
                    
                    
                )
            }
            </div>
            
            
            <div className="userCount">
                <UserCount addedUsers = {added}></UserCount>
            </div>
            

        </div>
    );
};

export default People;