import {Space, Typography} from "antd";

const { Title, Text, Link } = Typography;

export default function ContactUs() {
  return (
    <Space direction="vertical">
      <Title level={2}>Contact Us</Title>
      <Link href={'mailto:Support@caffeine-driven-development.com'}><Text>Support@caffeine-driven-development.com</Text></Link>
    </Space>
  )
}