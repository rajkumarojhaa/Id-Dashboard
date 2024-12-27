import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
];

function Card({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{title}</h3>
      <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
    </div>
  );
}

function Dashboard() {
  const [totalCards, setTotalCards] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);
  const [recentOrders, setRecentOrders] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    // Simulating real-time updates
    const interval = setInterval(() => {
      setTotalCards(prev => prev + Math.floor(Math.random() * 10));
      setPendingOrders(Math.floor(Math.random() * 50));
      setRecentOrders(Math.floor(Math.random() * 20));
      setRevenue(prev => prev + Math.floor(Math.random() * 1000));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  {/* Cards */}
  <Card title="Total ID Cards Created" value={totalCards} />
  <Card title="Pending Orders" value={pendingOrders} />
  <Card title="Recent Completed Orders" value={recentOrders} />
  <Card title="Revenue" value={`$${revenue.toLocaleString()}`} />

  {/* Chart Section */}
  <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">Monthly Revenue</h3>
    <div className="h-[200px] sm:h-[250px] lg:h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>

  );
}

export default Dashboard;
