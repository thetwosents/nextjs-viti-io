import React from 'react';
import styles from '../styles/Home.module.css'
import { Layout, Row, Col, Menu, Dropdown, Typography, Avatar } from 'antd';
import Image from 'next/image';
import { UserOutlined, MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;
export const MainHeader = () => {
  return (
    <Header className={styles.header} style={{
      background: '#121A22',
      padding: '0px 80px',
      height: '80px'
    }}>
      <Row align="middle" justify='space-between'>
        <Col>
          <Image style={{ display: 'block' }} src={'/logo.svg'} alt={'Logo'} width={200} height={80} />
        </Col>
        <Col span={16}>
          <MainMenu />
        </Col>
      </Row>
    </Header>
  )
}

const MainMenu = () => {
  let items = [
    {
      label: 'Environment',
      key: 'environment',
    },
    {
      label: 'Facility',
      key: 'facility',
    },
    
    {
      label: 'Trees',
      key: 'trees',
    },
    {
      label: 'Sensors',
      key: 'sensors',
    },
    {
      label: 'Real-Time',
      key: 'real-time',
    },
    
    
  ]
  const menu = (
    <Menu
      selectable
      items={[
        {
          key: '1',
          label: 'Sign up',
        },
        {
          key: '2',
          label: 'Log in',
        }
      ]}
    />
  );
  return (
    <>
      <ul className={styles.mainMenu}>
        {items.map((item, index) => <li key={index}><span>{item.label}</span></li>)}
        <Dropdown  overlay={menu} trigger={['click']} placement="bottomLeft">
          <Typography.Link>
            <li><span className={styles.avatar}><MenuOutlined style={{ marginRight: 12 }} /><Avatar size={32} icon={<UserOutlined />} /></span></li>
          </Typography.Link>
        </Dropdown>
      </ul>
    </>
  )
}

export default MainHeader;