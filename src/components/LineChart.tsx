import React from 'react';
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import axios from 'axios';

const LineChart: React.FC = () => {
  const { data, isLoading } = useQuery('covidHistoricalData', async () => {
    const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    return response.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data.cases),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
