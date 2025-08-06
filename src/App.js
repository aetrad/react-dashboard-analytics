import React from 'react';
import './App.css';

// Données exemple
const mockData = [
  { month: 'Jan', revenue: 4000, orders: 240 },
  { month: 'Feb', revenue: 3000, orders: 139 },
  { month: 'Mar', revenue: 5000, orders: 980 },
  { month: 'Apr', revenue: 4500, orders: 390 },
  { month: 'May', revenue: 6000, orders: 480 },
  { month: 'Jun', revenue: 7000, orders: 380 }
];

const MetricCard = ({ title, value, change, color }) => (
  <div className="metric-card">
    <h3>{title}</h3>
    <div className="metric-value" style={{color}}>{value}</div>
    <div className="metric-change">{change}</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="dashboard-header">
        <h1>📊 Analytics Dashboard</h1>
        <p>Business Performance Overview</p>
      </header>

      <div className="metrics-container">
        <MetricCard 
          title="Total Revenue" 
          value="€45,231" 
          change="+12.5% vs last month"
          color="#4CAF50"
        />
        <MetricCard 
          title="Orders" 
          value="1,234" 
          change="+5.2% vs last month"
          color="#2196F3"
        />
        <MetricCard 
          title="Customers" 
          value="890" 
          change="+8.1% vs last month"
          color="#FF9800"
        />
        <MetricCard 
          title="Conversion Rate" 
          value="3.2%" 
          change="+0.4% vs last month"
          color="#9C27B0"
        />
      </div>

      <div className="chart-placeholder">
        <h2>📈 Revenue Chart</h2>
        <p>Interactive charts with Recharts coming next...</p>
        <div className="demo-chart">
          {mockData.map(item => (
            <div key={item.month} className="chart-bar">
              <div className="bar" style={{height: `${item.revenue/100}px`}}></div>
              <span>{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
