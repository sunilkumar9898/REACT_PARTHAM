import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                    <Link to="/">Form Page</Link>
                </li>
              
            </ul>
        </div>
    );
};

export default Home;
