import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';
import { Layout, Row, Col } from 'antd';
import MainHeader from '../components/MainHeader';
import SecondaryHeader from '../components/SecondaryHeader';
import SubNavHeader from '../components/SubNavHeader';
import 'mapbox-gl/dist/mapbox-gl.css';
// mapboxgl.accessToken = 'pk.eyJ1IjoiY2xvdWRzdHJpZmVqb24iLCJhIjoiY2tvM2N3YmV5MTF6NTJvcXdwaTJ2MWJ1NCJ9.r3oSKHKhUgexB2KrFsB33Q';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Viti.IO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className="layout">
        <MainHeader />
        <div className='tile'>
        <Row>
          <Col span={24}>
            <SecondaryHeader />
          </Col>
        </Row>
        </div>
      </Layout>

    </div>
  )
}
