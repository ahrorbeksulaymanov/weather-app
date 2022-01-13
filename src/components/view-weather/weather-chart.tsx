import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

interface Provider {
    time: any;
    temp_c: any;
  }

const WeatherChart = (props:any) => {

    const [data, setdata] = useState<Provider[]>([])

    useEffect(() => {
        const data2 = props?.data?.map((item:any)=> ({time:item?.time.slice(11, 16), temp:item?.temp_c}))
        setdata(data2)
    }, [props])

      const config = {
        data,
        xField: 'time',
        yField: 'temp',
        label: {},
        point: {
          size: 5,
          shape: 'diamond',
          style: {
            fill: 'white',
            stroke: '#5B8FF9',
            lineWidth: 2,
          },
        },
        tooltip: {
          showMarkers: false,
        },
        state: {
          active: {
            style: {
              shadowBlur: 4,
              stroke: '#000',
              fill: 'red',
            },
          },
        },
        interactions: [
          {
            type: 'marker-active',
          },
        ],
      };

  return (
    
    <Line {...config} />
  );
}
export default WeatherChart;