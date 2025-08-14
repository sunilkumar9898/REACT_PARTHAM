import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const Navbar = () => {
    return (
        <Layout>
            <Header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#2c2f33",
                    padding: "0 50px",
                }}>
                {/* Logo */}
                <div
                    style={{
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: "bold",
                    }}>
                    Knowledge<span style={{ color: "#4cafef" }}>Base</span>
                    <span
                        style={{
                            fontSize: "12px",
                            marginLeft: "10px",
                            fontWeight: "normal",
                        }}>
                        Premium HTML Template
                    </span>
                </div>

                {/* Menu */}
                <Menu
                    mode="horizontal"
                    theme="dark"
                    style={{ background: "transparent", borderBottom: "none" }}>
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="home2">Home 2</Menu.Item>
                    <Menu.Item key="home3">Home 3</Menu.Item>
                    <Menu.Item key="articles">Articles List</Menu.Item>
                    <Menu.Item key="faqs">FAQs</Menu.Item>
                    <Menu.Item key="skins">Skins</Menu.Item>
                    <Menu.Item key="more">More</Menu.Item>
                    <Menu.Item key="contact">Contact</Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
};

export default Navbar;
