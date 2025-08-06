import React from "react";
import { useFetch } from "../hook/useFetch";


const UseFetchAPI = () => {
    const { data, loading, error } = useFetch("https://dummyjson.com/products");

    if (loading) return <p>Loading .....⭐🌟l</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div className="grid-parent">
            <div className="grid-container">
                {data.products.map((item) => (
                    <div key={item.id} className="product-card">
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="product-image"
                        />
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-price">${item.price}</p>
                        <div className="product-buttons">
                            <button className="btn cart-btn">
                                Add to Cart
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UseFetchAPI;
