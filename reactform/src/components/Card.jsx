import React from "react";

const Card = ({ item }) => {
    console.log(item, "item");

    return (
        <div>
            <div className="cardBox">
                <h1>Card</h1>
                <p>First Name : -{item?.firstName}</p>
                <p> last Name : -{item?.lastName}</p>
                <p>Email : -{item?.email}</p>
                <p>Age : - {item?.age}</p>
                <p> Password : -{item?.password}</p>
            </div>
        </div>
    );
};

export default Card;
