import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";


const ProductsCopy = () => {
    const [product, setProduct] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = async () => {
        const limit = 10;
        try {
            const response = await axios.get(
                `https://fakestoreapi.com/products?limit=${limit}&offset=${
                    (page - 1) * limit
                }`
            );
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const loadMore = async () => {
        const newProducts = await fetchData();

        if (!newProducts || newProducts.length === 0) {
            setHasMore(false);
            return;
        }

        setProduct((prev) => [...prev, ...newProducts]);
        setPage((prev) => prev + 1);
    };

    useEffect(() => {
        loadMore();
    }, []);



    return (
        <div
            style={{
                padding: "30px",
                background: "#f8f9fa",
                minHeight: "100vh",
            }}>

            <h2
                style={{
                    textAlign: "center",
                    marginBottom: "30px",
                    color: "#333",
                }}>
                🛒 Product List
            </h2>
            <InfiniteScroll
                dataLength={product.length}
                next={loadMore}
                hasMore={hasMore}
                loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center", marginTop: "20px" }}>
                        <b>🎉 Yay! You have seen it all</b>
                    </p>
                }>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "25px",
                    }}>
                    {product.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                background: "#fff",
                                borderRadius: "12px",
                                padding: "20px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(-8px)";
                                e.currentTarget.style.boxShadow =
                                    "0 8px 20px rgba(0,0,0,0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(0)";
                                e.currentTarget.style.boxShadow =
                                    "0 2px 8px rgba(0,0,0,0.1)";
                            }}>
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    width: "100%",
                                    height: "180px",
                                    objectFit: "contain",
                                    marginBottom: "10px",
                                }}
                            />
                            <h3
                                style={{
                                    fontSize: "16px",
                                    color: "#333",
                                    marginBottom: "8px",
                                }}>
                                {item.title.length > 40
                                    ? item.title.slice(0, 40) + "..."
                                    : item.title}
                            </h3>
                            <p
                                style={{
                                    fontSize: "13px",
                                    color: "#666",
                                    height: "40px",
                                    overflow: "hidden",
                                }}>
                                {item.description.length > 60
                                    ? item.description.slice(0, 60) + "..."
                                    : item.description}
                            </p>
                            <h4 style={{ marginTop: "10px", color: "#008060" }}>
                                ₹{item.price}
                            </h4>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default ProductsCopy;
