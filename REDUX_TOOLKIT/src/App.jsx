// import './App.css'
// import AppRouter from "./Layout/AppRouter";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// function App() {


//     return (
//         <>
//             <AppRouter />
//             <ToastContainer />
//         </>
//     );
// }

// export default App;





import React from "react";
import {
  Layout,
  Menu,
  Typography,
  Input,
  Row,
  Col,
  Card,
  List,
  Tag,
} from "antd";
import {
  HomeOutlined,
  BookOutlined,
  QuestionCircleOutlined,
  SkinOutlined,
  MoreOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Search } = Input;

const featuredArticles = [
  { title: "Integrating WordPress with Your Website", date: "25 Feb, 2013", category: "Server & Database", likes: 66 },
  { title: "WordPress Site Maintenance", date: "24 Feb, 2013", category: "Website Dev", likes: 15 },
  { title: "Meta Tags in WordPress", date: "23 Feb, 2013", category: "Website Dev", likes: 8 },
  { title: "WordPress in Your Language", date: "22 Feb, 2013", category: "Advanced Techniques", likes: 6 },
  { title: "Know Your Sources", date: "22 Feb, 2013", category: "Website Dev", likes: 2 },
  { title: "Validating a Website", date: "21 Feb, 2013", category: "Website Dev", likes: 3 },
];

const latestArticles = [
  { title: "Integrating WordPress with Your Website", date: "25 Feb, 2013", category: "Server & Database", likes: 66 },
  { title: "Using Javascript", date: "25 Feb, 2013", category: "Advanced Techniques", likes: 18 },
  { title: "Using Images", date: "25 Feb, 2013", category: "Designing in WordPress", likes: 7 },
  { title: "Using Video", date: "24 Feb, 2013", category: "WordPress Plugins", likes: 7 },
  { title: "WordPress Site Maintenance", date: "24 Feb, 2013", category: "Website Dev", likes: 15 },
  { title: "WordPress CSS Information and Techniques", date: "24 Feb, 2013", category: "Theme Development", likes: 1 },
];

const tags = [
  "basic", "beginner", "blogging", "colour", "css", "date",
  "design", "files", "format", "header", "images", "plugins",
  "setting", "templates", "theme", "time", "videos", "website", "wordpress"
];

const App = () => {
  return (
    <Layout>
      {/* Header Menu */}
      <Header style={{ background: "#2c3e50" }}>
        <div style={{ float: "left", color: "#fff", fontWeight: "bold", fontSize: 20, marginRight: 30 }}>
          KnowledgeBase
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key="2">Home 2</Menu.Item>
          <Menu.Item key="3">Home 3</Menu.Item>
          <Menu.Item key="4" icon={<BookOutlined />}>Articles List</Menu.Item>
          <Menu.Item key="5" icon={<QuestionCircleOutlined />}>FAQs</Menu.Item>
          <Menu.Item key="6" icon={<SkinOutlined />}>Skins</Menu.Item>
          <Menu.Item key="7" icon={<MoreOutlined />}>More</Menu.Item>
          <Menu.Item key="8" icon={<MailOutlined />}>Contact</Menu.Item>
        </Menu>
      </Header>

      {/* Search Section */}
      <Content style={{ padding: "50px", background: "linear-gradient(to right, #6a11cb, #2575fc)", textAlign: "center" }}>
        <Title style={{ color: "#fff" }}>Have a Question?</Title>
        <Paragraph style={{ color: "#f0f0f0" }}>
          If you have any question you can ask below or enter what you are looking for!
        </Paragraph>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <Search placeholder="Type your search terms here" enterButton="Search" size="large" />
        </div>
      </Content>

      {/* Main Content */}
      <Content style={{ padding: "50px" }}>
        <Row gutter={24}>
          {/* Featured Articles */}
          <Col span={8}>
            <Title level={3}>Featured Articles</Title>
            <List
              itemLayout="vertical"
              dataSource={featuredArticles}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Link>{item.title}</Typography.Link>
                  <Paragraph type="secondary" style={{ margin: 0 }}>
                    {item.date} in {item.category} | 👍 {item.likes}
                  </Paragraph>
                </List.Item>
              )}
            />
          </Col>

          {/* Latest Articles */}
          <Col span={8}>
            <Title level={3}>Latest Articles</Title>
            <List
              itemLayout="vertical"
              dataSource={latestArticles}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Link>{item.title}</Typography.Link>
                  <Paragraph type="secondary" style={{ margin: 0 }}>
                    {item.date} in {item.category} | 👍 {item.likes}
                  </Paragraph>
                </List.Item>
              )}
            />
          </Col>

          {/* Support + Quick Links + Tags */}
          <Col span={8}>
            <Card title="Support" bordered={false} style={{ marginBottom: 20, background: "#fffbe6" }}>
              Need more support? If you did not find an answer, contact us for further help.
            </Card>

            <Card title="Quick Links" bordered={false} style={{ marginBottom: 20 }}>
              <List size="small">
                <List.Item>Home</List.Item>
                <List.Item>FAQs</List.Item>
                <List.Item>Articles List</List.Item>
                <List.Item>Contact</List.Item>
              </List>
            </Card>

            <Card title="Tags" bordered={false}>
              {tags.map((tag) => (
                <Tag key={tag} style={{ marginBottom: 5 }}>{tag}</Tag>
              ))}
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Footer */}
      <Footer style={{ background: "#2c3e50", color: "#fff", padding: "50px" }}>
        <Row gutter={24}>
          <Col span={6}>
            <Title level={4} style={{ color: "#fff" }}>How it works</Title>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Paragraph>
          </Col>
          <Col span={6}>
            <Title level={4} style={{ color: "#fff" }}>Categories</Title>
            <List>
              <List.Item>Advanced Techniques</List.Item>
              <List.Item>Designing in WordPress</List.Item>
              <List.Item>Server & Database</List.Item>
              <List.Item>Theme Development</List.Item>
              <List.Item>Website Dev</List.Item>
              <List.Item>WordPress for Beginners</List.Item>
              <List.Item>WordPress Plugins</List.Item>
            </List>
          </Col>
          <Col span={6}>
            <Title level={4} style={{ color: "#fff" }}>Latest Tweets</Title>
            <Paragraph>No Tweets loaded!</Paragraph>
          </Col>
          <Col span={6}>
            <Title level={4} style={{ color: "#fff" }}>Flickr Photos</Title>
            <div style={{ background: "#fff", height: 80, width: 120 }}></div>
          </Col>
        </Row>
        <Paragraph style={{ textAlign: "center", marginTop: 20 }}>
          Copyright © 2013. All Rights Reserved by KnowledgeBase.
        </Paragraph>
      </Footer>
    </Layout>
  );
};

export default App;

