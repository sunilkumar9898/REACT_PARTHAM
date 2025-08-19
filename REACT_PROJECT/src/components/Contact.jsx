import React from "react";
import { Row, Col, Typography, Form, Input, Button, Card, List } from "antd";
import {
    MailOutlined,
    FileTextOutlined,
    LikeOutlined,
    UserOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const articles = [
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
];

const Contact = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Form Data:", values);
        form.resetFields();
    };

    return (
        <div style={{ padding: "40px" , width:"70%" , margin:"auto"}}>
            <Row gutter={[0]}>
                {/* Left Side - Contact Form */}
                <Col xs={24} md={16}>
                    <Title level={2}>Contact</Title>
                    <Paragraph style={{ maxWidth: "600px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exercitation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat.
                    </Paragraph>

                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        style={{ maxWidth: "600px" }}>
                        <Form.Item
                            label="Your Name *"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your name",
                                },
                            ]}>
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Your Email *"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your email",
                                },
                                {
                                    type: "email",
                                    message: "Please enter a valid email",
                                },
                            ]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Subject" name="subject">
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Your Message *"
                            name="message"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your message",
                                },
                            ]}>
                            <Input.TextArea rows={5} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Send Message
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>

                {/* Right Side - Support + Latest Articles */}
                <Col xs={24} md={8}>
                    {/* Support Card */}
                    <Card
                        style={{ marginBottom: "20px", background: "#fffbe6" }}
                        bordered={false}>
                        <Row align="middle" gutter={10}>
                            <Col>
                                <UserOutlined
                                    style={{ fontSize: 40, color: "#fa8c16" }}
                                />
                            </Col>
                            <Col flex="auto">
                                <Title level={4}>Support</Title>
                                <Paragraph style={{ margin: 0 }}>
                                    Need more support? If you did not find an
                                    answer, contact us for further help.
                                </Paragraph>
                            </Col>
                        </Row>
                    </Card>

                    {/* Latest Articles */}
                    <Title level={4}>Latest Articles</Title>
                    <List
                        itemLayout="horizontal"
                        dataSource={articles}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={
                                        <FileTextOutlined
                                            style={{ fontSize: 20 }}
                                        />
                                    }
                                    title={<a href="#">{item.title}</a>}
                                    description={
                                        <>
                                            <div>
                                                {item.date} in{" "}
                                                <b>{item.category}</b>
                                            </div>
                                        </>
                                    }
                                />
                                <div>
                                    <LikeOutlined /> {item.likes}
                                </div>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Contact;
