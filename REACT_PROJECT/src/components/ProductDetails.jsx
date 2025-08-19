import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, Rate, Typography, Button } from "antd";

const { Title, Text } = Typography;

const ProductDetails = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const price = searchParams.get("price");
    const thumbnail = searchParams.get("thumbnail");
    const rating = searchParams.get("rating");
    const brand = searchParams.get("brand");

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "40vh", // center in page
                background: "#f5f5f5", // light bg
                padding: "40px 20px",
            }}>
            <Card
                hoverable
                style={{
                    width: 320,
                    borderRadius: 12,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                cover={
                    <img
                        alt={title}
                        src={thumbnail}
                        style={{
                            height: 250,
                            objectFit: "cover",
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                        }}
                    />
                }>
                <Title level={4} style={{ marginBottom: 12 }}>
                    {title}
                </Title>

                <p>
                    <Text strong>Brand:</Text>
                    <Text>
                        <Text strong>Brand:</Text>
                        <Text>{brand}</Text>
                    </Text>
                </p>

                <p>
                    <Text strong>Price:</Text>
                    <Text type="success" style={{ fontSize: 18 }}>
                        ₹{price}
                    </Text>
                </p>

                <p>
                    <Text strong>Rating:</Text>
                    <Rate allowHalf disabled defaultValue={Number(rating)} />
                </p>

                <Button
                    type="primary"
                    block
                    onClick={() => navigate("/product")}
                    style={{ marginTop: 16, borderRadius: 6 }}>
                    Back to All Products
                </Button>
            </Card>
        </div>
    );
};

export default ProductDetails;
