import React from "react";
import { Layout, Input, Button, Row, Col, Card, Tag, List } from "antd";
import {
    SearchOutlined,
    EditOutlined,
    FileTextOutlined,
} from "@ant-design/icons";

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

const HomeSection = () => {
    return (
        <Layout>
            {/* Gradient Background with Search */}
            <div
                style={{
                    background:
                        "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                    padding: "50px 0",
                    textAlign: "center",
                    color: "#fff",
                }}>
                <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
                    Have a Question?
                </h1>
                <p style={{ marginBottom: "30px" }}>
                    If you have any question you can ask below or enter what you
                    are looking for!
                </p>
                <Input
                    placeholder="Type your search terms here"
                    style={{ width: "50%", marginRight: "10px" }}
                />
                <Button type="primary" icon={<SearchOutlined />}>
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
                                                avatar={<FileTextOutlined />}
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
                                <Tag key={tag} style={{ marginBottom: "5px" }}>
                                    {tag}
                                </Tag>
                            ))}
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default HomeSection;
