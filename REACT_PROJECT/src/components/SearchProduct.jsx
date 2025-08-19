import { Button, Input, Spin, Card, Row, Col, Empty } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { useFetch } from "../customHook/useFetch";

const { Meta } = Card;

const SearchProduct = () => {
    const [query, setQuery] = useState(""); // input value
    const [url, setUrl] = useState(null); // API url for useFetch

    const { data, loading } = useFetch(url);

    // 🔹 jab query empty ho jaye to results clear
    useEffect(() => {
        if (!query.trim()) {
            setUrl(null);
        }
    }, [query]);

    const handleSearch = () => {
        if (!query.trim()) return;
        setUrl(`https://dummyjson.com/products/search?q=${query}`);
    };

    return (
        <div style={{ padding: "20px", background: "#f4f6f8" }}>
            {/* Search bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Input
                    placeholder="Enter product name"
                    size="large"
                    prefix={<SearchOutlined />}
                    style={{ width: "250px", borderRadius: "6px" }}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onPressEnter={handleSearch}
                />

                <Button
                    type="primary"
                    size="large"
                    style={{ borderRadius: "6px" }}
                    onClick={handleSearch}>
                    Search
                </Button>
            </div>

            {/* Results Section */}
            <div style={{ marginTop: "20px" }}>
                {loading && <Spin size="large" />}

                {url && !loading && data && data.products?.length === 0 && (
                    <Empty description="No Products Found" />
                )}

                {url && !loading && data && data.products?.length > 0 && (
                    <Row gutter={[16, 16]}>
                        {data.products.map((item) => (
                            <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt={item.title}
                                            src={item.thumbnail}
                                            style={{
                                                height: 200,
                                                objectFit: "cover",
                                            }}
                                        />
                                    }>
                                    <Meta
                                        title={`${item.title} - $${item.price}`}
                                        description={
                                            item.description.substring(0, 60) +
                                            "..."
                                        }
                                    />
                                    <div
                                        style={{
                                            marginTop: "10px",
                                            fontSize: "14px",
                                        }}>
                                        <p>
                                            <b>Brand:</b> {item.brand}
                                        </p>
                                        <p>
                                            <b>Category:</b> {item.category}
                                        </p>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </div>
        </div>
    );
};

export default SearchProduct;
