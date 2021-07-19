import React from 'react';

const UserCount = (props) => {
    const users = props.addedUsers;
    const total = users.reduce((total, user) => total + user.dob.age, 0);

    const sorted = users.sort(function (a, b) {
        return parseFloat(a.dob.age) - parseFloat(b.dob.age);
    });
    console.log(sorted);
    
    return (
        <div>
            <h2>Total Added Users: {users.length} </h2>
            <h4>Their total age: {total}</h4>
            <h3>Ascending by their age</h3>
            <ul>
                {   
                    
                    sorted.map((sorted) => 
                         <li> {sorted.name.first+" "} 
                         age: {sorted.dob.age}</li>
                     )
                }
            </ul>

        </div>
    );
};

export default UserCount;