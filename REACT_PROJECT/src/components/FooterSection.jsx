import React from "react";
import { Layout, Row, Col, List } from "antd";
import {
    FacebookFilled,
    TwitterSquareFilled,
    GoogleSquareFilled,
    LinkedinFilled,
} from "@ant-design/icons";

const { Footer } = Layout;

const categories = [
    "Advanced Techniques",
    "Designing in WordPress",
    "Server & Database",
    "Theme Development",
    "Website Dev",
    "WordPress for Beginners",
    "WordPress Plugins",
];

const FooterSection = () => {
    return (
        <>
            {/* Top Footer Section */}
            <div
                style={{
                    background: "#3d464d",
                    color: "#fff",
                    padding: "50px 80px",
                }}>
                <Row gutter={[30, 30]}>
                    {/* How it works */}
                    <Col xs={24} md={6}>
                        <h3>How it works</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                        </p>
                        <p>
                            Ut wisi enim ad minim veniam, quis nostrud exerci
                            tation ullamcorper suscipit lobortis nisl ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </Col>

                    {/* Categories */}
                    <Col xs={24} md={6}>
                        <h3>Categories</h3>
                        <List
                            dataSource={categories}
                            renderItem={(item) => (
                                <List.Item
                                    style={{
                                        border: "none",
                                        padding: "5px 0",
                                    }}>
                                    <a style={{ color: "#fff" }}>{item}</a>
                                </List.Item>
                            )}
                        />
                    </Col>

                    {/* Latest Tweets */}
                    <Col xs={24} md={6}>
                        <h3>Latest Tweets</h3>
                        <p>No Tweets loaded !</p>
                    </Col>

                    {/* Flickr Photos */}
                    <Col xs={24} md={6}>
                        <h3>Flickr Photos</h3>
                        <div
                            style={{
                                background: "#555",
                                height: "80px",
                                width: "100px",
                            }}></div>
                    </Col>
                </Row>
            </div>

            {/* Bottom Footer */}
            <Footer
                style={{
                    background: "#2f363d",
                    color: "#bbb",
                    textAlign: "center",
                    padding: "20px",
                }}>
                <div style={{ marginBottom: "10px" }}>
                    <FacebookFilled
                        style={{ fontSize: "20px", margin: "0 8px" }}
                    />
                    <TwitterSquareFilled
                        style={{ fontSize: "20px", margin: "0 8px" }}
                    />
                    <GoogleSquareFilled
                        style={{ fontSize: "20px", margin: "0 8px" }}
                    />
                    <LinkedinFilled
                        style={{ fontSize: "20px", margin: "0 8px" }}
                    />
                </div>
                Copyright © 2013. All Rights Reserved by KnowledgeBase.
            </Footer>
        </>
    );
};

export default FooterSection;
