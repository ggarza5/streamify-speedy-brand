import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const DataContext = createContext({
  metrics: {},
  userGrowthData: [],
  revenueData: [],
  topSongsData: [],
  recentStreams: [],
  filteredStreams: [],
  handleRevenueClick: () => {},
});

// Create the provider component
export const DataProvider = ({ children, initialData = [] }) => {
  const [metrics, setMetrics] = useState({});
  const [userGrowthData, setUserGrowthData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [topSongsData, setTopSongsData] = useState([]);
  const [recentStreams, setRecentStreams] = useState([]);
  const [filteredStreams, setFilteredStreams] = useState(initialData);

  useEffect(() => {
    // Hardcoded data
    const metricsData = {
      totalUsers: 10000,
      activeUsers: 7500,
      totalStreams: 500000,
      revenue: 120000,
      topArtist: "Artist A",
      newUsers: 500,
      churnRate: 0.05
    };

    const userGrowthData = [
      { month: "Jan", totalUsers: 8000, activeUsers: 6000, newUsers: 200, churnRate: 0.02 },
      { month: "Feb", totalUsers: 8200, activeUsers: 6100, newUsers: 250, churnRate: 0.03 },
      { month: "Mar", totalUsers: 8500, activeUsers: 6300, newUsers: 300, churnRate: 0.04 },
      { month: "Apr", totalUsers: 8700, activeUsers: 6400, newUsers: 200, churnRate: 0.02 },
      { month: "May", totalUsers: 9000, activeUsers: 6600, newUsers: 300, churnRate: 0.03 },
      { month: "Jun", totalUsers: 9200, activeUsers: 6700, newUsers: 250, churnRate: 0.02 },
      { month: "Jul", totalUsers: 9500, activeUsers: 6900, newUsers: 350, churnRate: 0.04 },
      { month: "Aug", totalUsers: 9700, activeUsers: 7000, newUsers: 300, churnRate: 0.03 },
      { month: "Sep", totalUsers: 9900, activeUsers: 7200, newUsers: 250, churnRate: 0.02 },
      { month: "Oct", totalUsers: 10000, activeUsers: 7500, newUsers: 300, churnRate: 0.03 },
      { month: "Nov", totalUsers: 10200, activeUsers: 7600, newUsers: 250, churnRate: 0.02 },
      { month: "Dec", totalUsers: 10500, activeUsers: 7800, newUsers: 300, churnRate: 0.03 },
      { month: "Jan", totalUsers: 10800, activeUsers: 8000, newUsers: 350, churnRate: 0.04 },
      { month: "Feb", totalUsers: 11000, activeUsers: 8200, newUsers: 400, churnRate: 0.05 }
    ];

    const revenueData = [
      { name: "Subscriptions", value: 80000 },
      { name: "Ads", value: 40000 },
      { name: "Merchandise", value: 20000 },
      { name: "Live Events", value: 15000 },
      { name: "Sponsorships", value: 10000 }
    ];

    const topSongsData = [
      { song: "Song A", streams: 5000, artist: "Artist A", album: "Album A" },
      { song: "Song B", streams: 4500, artist: "Artist B", album: "Album B" },
      { song: "Song C", streams: 4000, artist: "Artist C", album: "Album C" },
      { song: "Song D", streams: 3500, artist: "Artist D", album: "Album D" },
      { song: "Song E", streams: 3000, artist: "Artist E", album: "Album E" },
      { song: "Song F", streams: 2500, artist: "Artist F", album: "Album F" },
      { song: "Song G", streams: 2000, artist: "Artist G", album: "Album G" }
    ];

    const recentStreams = [
      { songName: "Song A", artist: "Artist A", dateStreamed: "2023-10-01", streamCount: 100, userId: "user1", revenueSource: "Subscriptions" },
      { songName: "Song B", artist: "Artist B", dateStreamed: "2023-10-02", streamCount: 90, userId: "user2", revenueSource: "Ads" },
      { songName: "Song C", artist: "Artist C", dateStreamed: "2023-10-03", streamCount: 80, userId: "user3", revenueSource: "Merchandise" },
      { songName: "Song D", artist: "Artist D", dateStreamed: "2023-10-04", streamCount: 70, userId: "user4", revenueSource: "Live Events" },
      { songName: "Song E", artist: "Artist E", dateStreamed: "2023-10-05", streamCount: 60, userId: "user5", revenueSource: "Subscriptions" },
      { songName: "Song F", artist: "Artist F", dateStreamed: "2023-10-06", streamCount: 50, userId: "user6", revenueSource: "Sponsorships" },
      { songName: "Song G", artist: "Artist G", dateStreamed: "2023-10-07", streamCount: 40, userId: "user7", revenueSource: "Ads" },
      { songName: "Song H", artist: "Artist H", dateStreamed: "2023-10-08", streamCount: 30, userId: "user8", revenueSource: "Merchandise" }
    ];

    setMetrics(metricsData);
    setUserGrowthData(userGrowthData);
    setRevenueData(revenueData);
    setTopSongsData(topSongsData);
    setRecentStreams(recentStreams);
    setFilteredStreams(recentStreams);
  }, []);

  const handleRevenueClick = (source) => {
    const filtered = recentStreams.filter(stream => stream.revenueSource === source);
    setFilteredStreams(filtered);
  };

  return (
    <DataContext.Provider value={{
      metrics,
      userGrowthData,
      revenueData,
      topSongsData,
      recentStreams,
      filteredStreams,
      handleRevenueClick
    }}>
      {children}
    </DataContext.Provider>
  );
};