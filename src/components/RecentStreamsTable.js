import React, { useState, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { CSVLink } from 'react-csv';

const RecentStreamsTable = () => {
  const { filteredStreams } = useContext(DataContext);
  const [sortConfig, setSortConfig] = useState({ key: 'dateStreamed', direction: 'ascending' });
  const [filterConfig, setFilterConfig] = useState({ artist: '', songName: '' });
  const [visibleColumns, setVisibleColumns] = useState({
    songName: true,
    artist: true,
    dateStreamed: true,
    streamCount: true,
    userId: true,
  });

  // Filter streams based on filterConfig
  const filteredAndSortedStreams = [...filteredStreams]
    .filter(stream => 
      stream.artist.toLowerCase().includes(filterConfig.artist.toLowerCase()) &&
      stream.songName.toLowerCase().includes(filterConfig.songName.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

  // Handle sorting request
  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Handle filter input changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterConfig(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle column visibility changes
  const handleColumnVisibilityChange = (e) => {
    const { name, checked } = e.target;
    setVisibleColumns(prevState => ({ ...prevState, [name]: checked }));
  };

  // Get data with only visible columns
  const getVisibleData = (data) => {
    return data.map(stream => {
      const visibleStream = {};
      Object.keys(visibleColumns).forEach(column => {
        if (visibleColumns[column]) {
          visibleStream[column] = stream[column];
        }
      });
      return visibleStream;
    });
  };

  return (
    <div className="p-4">
      <div className="filters mb-4 flex space-x-4">
        {/* Filter inputs */}
        <input
          type="text"
          name="artist"
          placeholder="Filter by artist"
          value={filterConfig.artist}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="songName"
          placeholder="Filter by song name"
          value={filterConfig.songName}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
      </div>
      <div className="column-visibility mb-4 flex space-x-4">
        {/* Column visibility checkboxes */}
        {Object.keys(visibleColumns).map(column => (
          <label key={column} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name={column}
              checked={visibleColumns[column]}
              onChange={handleColumnVisibilityChange}
              className="form-checkbox"
            />
            <span>{column}</span>
          </label>
        ))}
      </div>
      {/* Export to CSV button */}
      <CSVLink data={getVisibleData(filteredAndSortedStreams)} filename="streams.csv" className="mb-4 inline-block bg-blue-500 text-white p-2 rounded">
        Export to CSV
      </CSVLink>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {/* Table headers with sorting */}
            {visibleColumns.songName && <th onClick={() => requestSort('songName')} className="py-2 px-4 border-b">Song Name</th>}
            {visibleColumns.artist && <th onClick={() => requestSort('artist')} className="py-2 px-4 border-b">Artist</th>}
            {visibleColumns.dateStreamed && <th onClick={() => requestSort('dateStreamed')} className="py-2 px-4 border-b">Date Streamed</th>}
            {visibleColumns.streamCount && <th onClick={() => requestSort('streamCount')} className="py-2 px-4 border-b">Stream Count</th>}
            {visibleColumns.userId && <th className="py-2 px-4 border-b">User ID</th>}
          </tr>
        </thead>
        <tbody>
          {/* Table rows */}
          {filteredAndSortedStreams.map((stream, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {visibleColumns.songName && <td className="py-2 px-4 border-b">{stream.songName}</td>}
              {visibleColumns.artist && <td className="py-2 px-4 border-b">{stream.artist}</td>}
              {visibleColumns.dateStreamed && <td className="py-2 px-4 border-b">{stream.dateStreamed}</td>}
              {visibleColumns.streamCount && <td className="py-2 px-4 border-b">{stream.streamCount}</td>}
              {visibleColumns.userId && <td className="py-2 px-4 border-b">{stream.userId}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(RecentStreamsTable);