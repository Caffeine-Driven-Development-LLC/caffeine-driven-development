import {Layout, Space, Typography} from "antd";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

export default function Index() {
  return (
    <Layout>
      <Header>
        <Title>Caffeine Driven Development</Title>
      </Header>
      <Content>
        <Space direction="vertical" size={16}>
          <Text>This is some basic text in the content</Text>
          {
            Array.from({length: 100}, (_, index) => (
              <Text>index</Text>
            ))
          }
        </Space>
      </Content>
      <Footer>
        <Text>This is some basic text in the footer</Text>
      </Footer>
    </Layout>
  );
}