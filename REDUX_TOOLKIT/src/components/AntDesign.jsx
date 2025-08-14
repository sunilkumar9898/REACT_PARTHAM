import React, { useState } from "react";
import { FloatButton, Layout, Menu, theme } from "antd";
import {
    DashOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Counter from "./Counter";

const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        key: "1",
        icon: 'Home',
        content: <Login/>,
    },
    {
        key: "2",
        label: "Counter",
        content: <Counter/>,
    },
    {
        key: "3",
        label: "Dashboard",
        content: <Dashboard/>,
    },
    {
        key: "4",
        icon: <UserOutlined />,
        label: "Profile",
        content: "This is Profile Content",
    },
];

const AntDesign = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [activeKey, setActiveKey] = useState("1"); // Default active content

    return (
        <Layout>
            {/* Fixed Sidebar */}
            <Sider
                width={200}
                style={{
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[activeKey]}
                    onClick={(e) => setActiveKey(e.key)}
                    items={items.map(({ key, icon, label }) => ({
                        key,
                        icon,
                        label,
                    }))}
                />
            </Sider>

            {/* Content Area */}
            <Layout style={{ marginLeft: 200, minHeight: "100vh" }}>
                <Content
                    style={{
                        // margin: "24px 16px 0",
                        overflow: "hidden", // auto ki jagah hidden
                        minHeight: "calc(100vh - 64px - 70px)", // height ko minHeight me badal do
                    }}>
                    <div
                        style={{
                            padding: 24,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}>
                        {items.find((item) => item.key === activeKey)?.content}
                    </div>
                </Content>

                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>

            <FloatButton.BackTop visibilityHeight={0} />
        </Layout>
    );
};

export default AntDesign;
