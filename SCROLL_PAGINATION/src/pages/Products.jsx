import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Products = () => {
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const limit = 10;
    const loaderRef = useRef(null);
    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://fakestoreapi.com/products?limit=${limit}&offset=${
                    (page - 1) * limit
                }`
            );
            return response?.data;
        } catch (error) {
            console.log(error);
        }
    };

    const loadMore = async () => {
        const newProducts = await fetchData();

        if (newProducts.length === 0) {
            setHasMore(false);
            return;
        }
        setProduct((prev) => [...prev, ...newProducts]);
        setPage((prev) => prev + 1);
    };

    useEffect(() => {
        loadMore();
    }, []);

    useEffect(() => {
        if (!loaderRef.current || !hasMore) return;
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    console.log("found Elemnt");

                    loadMore();
                }
            },
            {
                rootMargin: "10px",
            }
        );
        observer.observe(loaderRef.current);
        return () => {
            if (loaderRef.current) observer.unobserve(loaderRef.current);
        };
    }, [loaderRef, hasMore, page]);

    return (
        <div>
            <h2>Product List</h2>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: "20px",
                }}>
                {product.map(( item ,index) => (
                    <div
                        key={index}
                        style={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            borderRadius: "8px",
                            textAlign: "center",
                        }}>
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "contain",
                            }}
                        />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <h5>₹{item.price}</h5>
                    </div>
                ))}
            </div>
            <div>
                {hasMore && <div ref={loaderRef}>Loding Product .......</div>}
                {!hasMore && <div>All Loaded</div>}
            </div>
        </div>
    );
};

export default Products;
