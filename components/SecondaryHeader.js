import React, { useState } from 'react';
import { PageHeader, Tabs } from 'antd';
import SubNavHeader from './SubNavHeader';
const { TabPane } = Tabs;

export const SecondaryHeader = () => {
  const initialRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Viti.IO',
    },
    {
      path: 'second',
      breadcrumbName: 'Environment',
    },
  ];

  const [routes, setRoutes] = useState(initialRoutes);

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Environment Dashboard"
        breadcrumb={{ routes }}
        subTitle="32 sensors monitoring 6 variables in the environment"
      />
      <SubNavHeader />

    </>
  )
}


export default SecondaryHeader;