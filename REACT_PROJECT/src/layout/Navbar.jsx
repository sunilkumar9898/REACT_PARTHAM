import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
// import "./Navbar.css"; // ✅ custom css file import kar le

const { Header } = Layout;
const { SubMenu } = Menu;

const Navbar = () => {
    const location = useLocation();

    const menuItems = [
        { key: "home", label: "Home", path: "/" },
        { key: "categories", label: "Home 2", path: "/categories" },
        { key: "home3", label: "Home 3" },
        { key: "articles", label: "Articles List" },
        { key: "faqs", label: "FAQs" },
        { key: "skins", label: "Skins" },
        { key: "more", label: "More" },
        { key: "contact", label: "Contact", path: "/contact" },
    ];

    const productSubItems = [
        { key: "p1", label: "Search Product", path: "searchProduct" },
        { key: "p2", label: "Product 2", path: "/product/2" },
        { key: "p3", label: "Product 3", path: "/product/3" },
    ];

    return (
        <Layout>
            <Header
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#2c2f33",
                    padding: "0 40px",
                    flexWrap: "wrap",
                }}>
                {/* Logo Section */}
                <div
                    style={{
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: "bold",
                        whiteSpace: "nowrap",
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

                {/* Menu Section */}
                <Menu
                    mode="horizontal"
                    theme="dark"
                    selectedKeys={[location.pathname]} // ✅ active route
                    style={{
                        background: "transparent",
                        borderBottom: "none",
                        flex: "1",
                        justifyContent: "flex-end",
                        minWidth: "300px",
                    }}>
                    {menuItems.map((item) => (
                        <Menu.Item key={item.path || item.key}>
                            {item.path ? (
                                <Link to={item.path}>{item.label}</Link>
                            ) : (
                                item.label
                            )}
                        </Menu.Item>
                    ))}
                    <SubMenu key="product" title="Product">
                        {productSubItems.map((sub) => (
                            <Menu.Item key={sub.path}>
                                <Link to={sub.path}>{sub.label}</Link>
                            </Menu.Item>
                        ))}
                    </SubMenu>
                </Menu>
            </Header>
        </Layout>
    );
};

export default Navbar;
