import './UserShow.css'
import React from 'react';

const UserShow = (props) => {
    console.log(props.user);
    const { email, picture, name } = props.user;
    const { title, first, last } = name;
    return (
        <div className="userShow">
            <div className="userImg">
                <img src={picture.large} alt="" />

            </div>
            <div className="userDetail">
                <h2>{title + " " + first + " " + last}</h2>
                <h5>Email: {email}</h5>
            </div>


        </div>
    );
};

export default UserShow;