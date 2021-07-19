import './UserShow.css'
import React from 'react';

const UserShow = (props) => {
    
    const { email, picture, name,dob, location } = props.user;
    const { title, first, last } = name;
    const addUsers = props.handleAdded;

    
    return (
        <div className="user">
            <div className="userImg">
                <img src={picture.large} alt="" />

            </div>
            <div className="userDetail">
                <h2>{title + " " + first + " " + last}</h2>
                <h5>Email: {email}</h5>
                <p><small>Age: {dob.age}</small></p>
                <h5>From: {location.city+ ', '+location.country}</h5>
                <button onClick={() => addUsers(props.user)}>add users</button>
            </div>


        </div>
    );
};

export default UserShow;