import {List, Space, Typography} from "antd";
import Image from "next/image";

const { Title, Text, Link } = Typography;

export default function ProductList() {
  return (
    <>
      <Title level={2}>Products</Title>
      <List
        itemLayout="vertical"
      >
        <List.Item>
          <Space direction="horizontal">
            <Image src={'AppTrackGhost.svg'} alt={'AppTrack Logo'} width={100} height={100}/>
            <Space direction="vertical" size={10}>
              <Link href={'https://getapptrack.com/'} style={{width: 'fit-content'}}><Title level={3}>AppTrack</Title></Link>
              <Text>A simple desktop application to organize your career search. AppTrack aims to replace that old spreadsheet previously used to track the job search with a clean and easy to use interface.</Text>
            </Space>
          </Space>
        </List.Item>
      </List>
    </>
  )
}