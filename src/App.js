import React, { useContext, lazy, Suspense } from 'react';
import { DataContext } from './context/DataContext';
import './styles.css';

const KeyMetrics = lazy(() => import('./components/KeyMetrics'));
const UserGrowthChart = lazy(() => import('./components/UserGrowthChart'));
const RevenueDistributionChart = lazy(() => import('./components/RevenueDistributionChart'));
const TopStreamedSongsChart = lazy(() => import('./components/TopStreamedSongsChart'));
const RecentStreamsTable = lazy(() => import('./components/RecentStreamsTable'));

const App = () => {
  const { metrics, userGrowthData, revenueData, topSongsData, filteredStreams, handleRevenueClick } = useContext(DataContext);

  return (
    <div className="dashboard">
      <h1>Streamify Analytics Dashboard</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <KeyMetrics metrics={metrics} />
        <div className="chart-container">
          <div className="chart">
            <h2>User Growth</h2>
            <UserGrowthChart data={userGrowthData} />
          </div>
          <div className="chart">
            <h2>Revenue Distribution</h2>
            <RevenueDistributionChart data={revenueData} onClick={handleRevenueClick} />
          </div>
        </div>
        <div className="table-container">
          <div className="table">
            <h2>Top 5 Streamed Songs</h2>
            <TopStreamedSongsChart data={topSongsData} />
          </div>
          <div className="table">
            <h2>Recent Streams</h2>
            <RecentStreamsTable streams={filteredStreams} />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
