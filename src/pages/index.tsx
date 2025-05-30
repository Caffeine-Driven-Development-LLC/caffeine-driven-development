import {Layout, Space, theme, Typography} from "antd";
import ProductList from "@/components/product-list";
import ContactUs from "@/components/contact-us";

const { Header, Content, Footer } = Layout;
const { Title, Text, Link } = Typography;

export default function Index() {
  const { token } = theme.useToken();

  return (
    <Layout style={{
      minHeight: '100vh',
    }}>
      <Header style={{
        background: token.colorBgContainer,
        height: 'auto',
        padding: '16px 50px',
        display: 'flex',
      }}>
        <Title>Caffeine Driven Development</Title>
      </Header>
      <Content style={{
        margin: token.marginMD,
        padding: '16px 50px',
        alignItems: 'center'
      }} >
        <Space direction="vertical" size={40}>
          <Text>We are a small business focused on small tech, lightweight, efficient, and no-nonsense software solutions with no hidden agendas. Our aim is not to become the next big tech company, but to use our expertise as software developers to create great tools with no catch to our users. We believe the best way to accomplish this is through transparency and open-source code. You can find ours on <Link href={'https://github.com/Caffeine-Driven-Development-LLC'}><Text>Github</Text></Link>.</Text>
          <ProductList />
          <ContactUs />
        </Space>
      </Content>
      <Footer>
        <Space direction="vertical">
          <Text>Built in Chicago, Illinois, fueled by passion and coffee.</Text>
          <Text>© 2025 Caffeine Driven Development LLC.</Text>
        </Space>
      </Footer>
    </Layout>
  );
}