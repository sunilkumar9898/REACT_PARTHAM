import React from "react";


const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <p>
                <strong>Name:</strong> {user.name}
            </p>
            <p>
                <strong>Age:</strong> {user.age}
            </p>
            <p>
                <strong>Gender:</strong> {user.gender}
            </p>
        </div>
    );
};

export default UserCard;
