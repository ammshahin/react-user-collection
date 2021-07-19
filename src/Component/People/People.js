import React from 'react';
import { useEffect, useState } from 'react';
import UserCount from '../UserCount/UserCount';
import UserShow from '../UsersShow/UserShow';
import './People.css'


const People = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => setUsers(data.results))
    },[])
    return (
        <div className="people">
            <div className="userShow">
            {
                users.map(user => 
                    <UserShow user={user}></UserShow>
                    
                    
                )
            }
            </div>
            <div className="userCount">

            </div>
            
            <div className="userCount">
                <UserCount></UserCount>
            </div>
            

        </div>
    );
};

export default People;