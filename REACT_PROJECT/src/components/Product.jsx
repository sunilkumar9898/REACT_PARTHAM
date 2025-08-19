import React from "react";
import {
    Row,
    Col,
    Card,
    Button,
    Rate,
    Tag,
    Typography,
    Spin,
    Alert,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useFetch } from "../customHook/useFetch";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;
const { Text } = Typography;

const Product = () => {
    const { data, loading, error } = useFetch("https://dummyjson.com/products");
    const navigate = useNavigate();
    const products = data?.products || [];

    if (loading) {
        return (
            <div
                style={{
                    minHeight: 300,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Spin size="large" />
            </div>
        );
    }

    if (error) {
        return (
            <Alert
                type="error"
                message="Failed to load products"
                description={error.message}
                showIcon
            />
        );
    }

    return (
        <div style={{ padding: 24 }}>
            <Row gutter={[16, 16]}>
                {products.map((item) => (
                    <Col
                        key={item.id}
                        xs={24} // Mobile (1 card per row)
                        sm={12} // Tablet (2 cards per row)
                        md={8} // Medium screen (3 cards per row)
                        lg={6} // Large screen (4 cards per row)
                        xl={4} // Extra Large (6 cards per row)
                    >
                        <Card
                            onClick={() =>
                                navigate(
                                    `/productDetails?title=${item?.title}&price=${item?.price}&thumbnail=${item.thumbnail}&rating=${item?.rating}&brand=${item?.brand}`
                                )
                            }
                            hoverable
                            cover={
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    style={{
                                        height: 200,
                                        objectFit: "cover",
                                    }}
                                />
                            }
                            actions={[
                                <Button
                                    type="primary"
                                    icon={<ShoppingCartOutlined />}
                                    key="cart">
                                    Add to Cart
                                </Button>,
                            ]}>
                            <Meta
                                title={
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: 8,
                                            alignItems: "center",
                                            flexWrap: "wrap",
                                        }}>
                                        <span>{item.title}</span>
                                        <Tag
                                            color="blue"
                                            style={{ marginLeft: "auto" }}>
                                            {item.category}
                                        </Tag>
                                    </div>
                                }
                                description={
                                    <div style={{ marginTop: 8 }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 8,
                                                marginBottom: 6,
                                            }}>
                                            <Rate
                                                disabled
                                                allowHalf
                                                defaultValue={item.rating}
                                            />
                                            <Text type="secondary">
                                                ({item.rating})
                                            </Text>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: 8,
                                                alignItems: "baseline",
                                            }}>
                                            <Text
                                                strong
                                                style={{ fontSize: 18 }}>
                                                ${item.price}
                                            </Text>
                                            {item.discountPercentage ? (
                                                <Text type="secondary">
                                                    {item.discountPercentage}%
                                                    off
                                                </Text>
                                            ) : null}
                                        </div>
                                        <Text type="secondary">
                                            Brand: {item.brand || "Unknown"}
                                        </Text>
                                    </div>
                                }
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Product;
