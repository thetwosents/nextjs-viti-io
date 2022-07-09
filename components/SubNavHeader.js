import React from 'react';
import { Tabs,Row } from 'antd';
import CurrentTemp from './charts/temperature/CurrentTemp';
const { TabPane } = Tabs;



export const SubNavHeader = () => {

  const tabs = [
    {
      id: 4,
      label: 'Temperature',
      render: <Temperature />,
    },
    {
      id: 2,
      label: 'Precipitation',
    },
    {
      id: 3,
      label: 'Wind',
    },
    
  ]
  const onChange = (e) => {
    console.log(e);
  }
  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      {
        tabs.map(tab => (
          <TabPane tab={tab.label} key={tab.id}>
            {tab.render}
          </TabPane>
        ))
      }
    </Tabs>
  )
}

const Temperature = () => {
  return (
    <div style={{width: '100%'}}>
      <Row>
        <CurrentTemp />
      </Row>
    </div>
  )
}

const Precipitation = () => {
  return (
    <div style={{width: '100%'}}>
      <Row>
        <CurrentTemp />
      </Row>
    </div>
  )
}



export default SubNavHeader;
