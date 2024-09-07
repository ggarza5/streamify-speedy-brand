import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RecentStreamsTable from './RecentStreamsTable';
import { DataProvider } from '../context/DataContext';
import { act } from 'react';

const mockStreams = [
  { songName: 'Song A', artist: 'Artist A', dateStreamed: '2023-01-01', streamCount: 100, userId: 'user1' },
  { songName: 'Song B', artist: 'Artist B', dateStreamed: '2023-01-02', streamCount: 200, userId: 'user2' },
];

//Check if the table is rendered
test('renders RecentStreamsTable and filters streams', async () => {
  await React.act(async () => {
    render(
      <DataProvider initialData={mockStreams}>
        <RecentStreamsTable />
      </DataProvider>
    );
  });

  // Check if table headers are rendered
  expect(screen.getByText('Song Name')).toBeInTheDocument();
  expect(screen.getByText('Artist')).toBeInTheDocument();
  expect(screen.getByText('Date Streamed')).toBeInTheDocument();
  expect(screen.getByText('Stream Count')).toBeInTheDocument();
  expect(screen.getByText('User ID')).toBeInTheDocument();

  // Check if filtering works
  fireEvent.change(screen.getByPlaceholderText('Filter by artist'), { target: { value: 'Artist A' } });

  await waitFor(() => {
    expect(screen.getByText('Song A')).toBeInTheDocument();
    expect(screen.queryByText('Song B')).not.toBeInTheDocument();
  });
});

test('toggles column visibility', async () => {
  await act(async () => {
    render(
      <DataProvider initialData={mockStreams}>
        <RecentStreamsTable />
      </DataProvider>
    );
  });

  // Check initial visibility
  expect(screen.getByText('Song Name')).toBeInTheDocument();
  expect(screen.getByText('Artist')).toBeInTheDocument();

  // Toggle visibility
  fireEvent.click(screen.getByLabelText('songName'));
  expect(screen.queryByText('Song Name')).not.toBeInTheDocument();
  fireEvent.click(screen.getByLabelText('artist'));
  expect(screen.queryByText('Artist')).not.toBeInTheDocument();
});

test('exports data to CSV', async () => {
  await act(async () => {
    render(
      <DataProvider initialData={mockStreams}>
        <RecentStreamsTable />
      </DataProvider>
    );
  });

  // Check if CSVLink is rendered
  expect(screen.getByText('Export to CSV')).toBeInTheDocument();
});
