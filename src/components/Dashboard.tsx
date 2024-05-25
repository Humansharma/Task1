import React from 'react';
import LineChart from './LineChart';
import Map from './Map';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">COVID-19 Dashboard</h1>
      <LineChart />
      <Map />
    </div>
  );
};

export default Dashboard;
