import React from "react";
import { Row, Col, Typography, Layout } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import { Input, Button, Card, Tag, List } from "antd";
import {
    SearchOutlined,
    EditOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;


const { Content } = Layout;

const featuredArticles = [
    {
        title: "Integrating WordPress with Your Website",
        date: "25 Feb, 2013",
        category: "Server & Database",
        likes: 66,
    },
    {
        title: "WordPress Site Maintenance",
        date: "24 Feb, 2013",
        category: "Website Dev",
        likes: 15,
    },
    {
        title: "Meta Tags in WordPress",
        date: "23 Feb, 2013",
        category: "Website Dev",
        likes: 8,
    },
    {
        title: "WordPress in Your Language",
        date: "22 Feb, 2013",
        category: "Advanced Techniques",
        likes: 6,
    },
    {
        title: "Know Your Sources",
        date: "22 Feb, 2013",
        category: "Website Dev",
        likes: 2,
    },
    {
        title: "Validating a Website",
        date: "21 Feb, 2013",
        category: "Website Dev",
        likes: 3,
    },
];

const latestArticles = [
    {
        title: "Integrating WordPress with Your Website",
        date: "25 Feb, 2013",
        category: "Server & Database",
        likes: 66,
    },
    {
        title: "Using Javascript",
        date: "25 Feb, 2013",
        category: "Advanced Techniques",
        likes: 18,
    },
    {
        title: "Using Images",
        date: "25 Feb, 2013",
        category: "Designing in WordPress",
        likes: 7,
    },
    {
        title: "Using Video",
        date: "24 Feb, 2013",
        category: "WordPress Plugins",
        likes: 7,
    },
    {
        title: "WordPress Site Maintenance",
        date: "24 Feb, 2013",
        category: "Website Dev",
        likes: 15,
    },
    {
        title: "WordPress CSS Information and Techniques",
        date: "24 Feb, 2013",
        category: "Theme Development",
        likes: 1,
    },
];

const tags = [
    "basic",
    "beginner",
    "blogging",
    "colour",
    "css",
    "date",
    "design",
    "files",
    "format",
    "header",
    "images",
    "plugins",
    "setting",
    "templates",
    "theme",
    "time",
    "videos",
    "website",
    "wordpress",
];

const categories = [
    {
        title: "WordPress for Beginners",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
    },
    {
        title: "Designing in WordPress",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
    },
    {
        title: "Theme Development",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat",
    },
    {
        title: "Website Dev",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam",
    },
    {
        title: "WordPress Plugins",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore",
    },
    {
        title: "Advanced Techniques",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut",
    },
];

const CategoriesPage = () => {
    return (
        <>
            <Layout>
                {/* Gradient Background with Search */}
                <div
                    style={{
                        background:
                            "linear-gradient(rgb(123,70,239), #70c6fb 0%, #7b5f78 100%)",
                        padding: "100px 0",
                        textAlign: "center",
                        color: "#fff",
                    }}>
                    <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
                        Have a Question?
                    </h1>
                    <p style={{ marginBottom: "30px", fontStyle: "italic" }}>
                        If you have any question you can ask below or enter what
                        you are looking for!
                    </p>
                    <Input
                        placeholder="Type your search terms here"
                        style={{
                            width: "50%",
                            marginRight: "10px",
                            lineHeight: "19px",
                            padding: "12px",
                            borderRadius: "0px",
                        }}
                    />
                    <Button
                        style={{
                            background: "#3f4b55",
                            fontSize: " 14px",
                            lineHeight: "19px",
                            fontWeight: "600",
                            color: "#fff",
                            border: "none",
                            padding: "22px",
                            borderRadius: "0",
                        }}>
                        Search
                    </Button>
                </div>

                {/* Content Section */}
                <Content style={{ padding: "50px" }}>
                    <Row gutter={[20, 20]}>
                        {/* Featured & Latest Articles */}
                        <Col xs={24} md={16}>
                            <Row gutter={20}>
                                {/* Featured */}
                                <Col xs={24} md={12}>
                                    <h3>Featured Articles</h3>
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={featuredArticles}
                                        renderItem={(item) => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={<EditOutlined />}
                                                    title={item.title}
                                                    description={`${item.date} in ${item.category}`}
                                                />
                                                <div>{item.likes} 👍</div>
                                            </List.Item>
                                        )}
                                    />
                                </Col>

                                {/* Latest */}
                                <Col xs={24} md={12}>
                                    <h3>Latest Articles</h3>
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={latestArticles}
                                        renderItem={(item) => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={
                                                        <FileTextOutlined />
                                                    }
                                                    title={item.title}
                                                    description={`${item.date} in ${item.category}`}
                                                />
                                                <div>{item.likes} 👍</div>
                                            </List.Item>
                                        )}
                                    />
                                </Col>
                            </Row>
                        </Col>

                        {/* Sidebar */}
                        <Col xs={24} md={8}>
                            {/* Support Card */}
                            <Card
                                style={{
                                    marginBottom: "20px",
                                    background: "#fffbe6",
                                }}>
                                <h3>Support</h3>
                                <p>
                                    Need more support? If you did not find an
                                    answer, contact us for further help.
                                </p>
                            </Card>

                            {/* Quick Links */}
                            <Card style={{ marginBottom: "20px" }}>
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>Home</li>
                                    <li>FAQs</li>
                                    <li>Articles List</li>
                                    <li>Contact</li>
                                </ul>
                            </Card>

                            {/* Tags */}
                            <Card>
                                <h3>Tags</h3>
                                {tags.map((tag) => (
                                    <Tag
                                        key={tag}
                                        style={{ marginBottom: "5px" }}>
                                        {tag}
                                    </Tag>
                                ))}
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
            <div style={{ padding: "40px 80px" }}>
                <Title level={3}>Categories</Title>
                <Row gutter={[32, 32]}>
                    {categories.map((cat, index) => (
                        <Col xs={24} sm={12} md={8} key={index}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "12px",
                                }}>
                                <FileTextOutlined
                                    style={{ fontSize: "24px", color: "#555" }}
                                />
                                <div>
                                    <Title level={5} style={{ margin: 0 }}>
                                        {cat.title}
                                    </Title>
                                    <Paragraph
                                        style={{ margin: 0, color: "#666" }}>
                                        {cat.description}
                                    </Paragraph>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};

export default CategoriesPage;
