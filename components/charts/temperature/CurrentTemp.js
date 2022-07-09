import React, { useRef, useEffect } from 'react';
import styles from '../../../styles/Home.module.css';
import { Chart } from '@antv/g2';
import { Col, Row } from 'antd';


export const CurrentTemp = () => {
  const data = {
    temp: 105,
    precipitation: 27,
    humidity: 29,
    wind:7
  }
  return (
    
    <Col span={8}>
      <div className="tile">
      <Row align='middle'>
        <Col span={6}>
          <h1 className={styles.temp}>105</h1>
        </Col>
        <Col span={12}>
          <ul>
            <li>Precipitation: {data.precipitation}%</li>
            <li>Humidity: {data.humidity}%</li>
            <li>Wind: {data.wind}mph</li>
          </ul>
        </Col>
        <Col span={6}>
          
        </Col>
      </Row>
      <TempChart />
      </div>
    </Col>
    
  );
}

const TempChart = () => {
  const chartRef = useRef(null);

  // Chart Configurations
  useEffect(() => {

    if (chartRef.current) {
      chartRef.current.destroy();
    }
    const data = [
      { time: 3, value: 105 },
      { time: 6, value: 104 },
      { time: 9, value: 97 },
      { time: 12, value: 93 },
      { time: 15, value: 87 },
      { time: 18, value: 83 },
      { time: 21, value: 83 },
      { time: 24, value: 92 },
    ];

    // Get the width of the chartContainer
    const width = document.getElementById('chartContainer').clientWidth;


    const chart = new Chart({
      container: 'chartContainer',
      // autoFit: true,
      width: width,
      height: 180,
      padding: [0, 0, 0, 0],
    });
    chart.data(data);
    chart.scale({
      value: {
        min: 10000,
        nice: true,
      },
      time: {
        range: [0, 1],
      },
    });
    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart.axis('value', {
      label: {
        formatter: (val) => {
          return (+val / 10000).toFixed(1) + 'k';
        },
      },
    });

    chart.area().position('time*value');
    chart.line().position('time*value');

    chart.render();

    chartRef.current = chart;
  }, [])
  return (
    <div id="chartContainer" style={{ width: '100%', height: '100%' }}></div>
  )
}


export default CurrentTemp;