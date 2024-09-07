# Music Streaming Dashboard

This project is a music streaming dashboard built with React and Tailwind CSS. It displays key metrics, recent streams, revenue distribution, top streamed songs, and user growth charts.

## Thought Process

The goal was to enhance the visual appeal of the dashboard using Tailwind CSS. The following steps were taken:

1. **Key Metrics**: Applied a grid layout with responsive columns and added card styling with shadows and rounded corners.
2. **Recent Streams Table**: Enhanced the table with better spacing, borders, and hover effects. Added styling to filters and export button.
3. **Charts**: Wrapped each chart in a styled container to give a consistent look and feel across the dashboard.

## How to Run the Application

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/your-repo/music-streaming-dashboard.git
   cd music-streaming-dashboard
   ```

2. **Install Dependencies**:

   ```sh
   npm install
   ```

3. **Start the Application**:

   ```sh
   npm start
   ```

4. **Run Tests**:
   ```sh
   npm test
   ```

## Trade-offs

- **Performance vs. Readability**: Some Tailwind classes were added directly to JSX elements for quick styling. This can make the JSX less readable but speeds up development.
- **Responsiveness**: Focused on making the layout responsive using Tailwind's grid system and responsive utilities. However, more complex responsive behavior might require additional media queries or custom CSS.
- **Component Reusability**: Kept components simple and focused on their specific tasks. For a larger application, consider breaking down components further for better reusability.

## Comments in Code

Comments were added to explain complex sections, especially where filtering, sorting, and handling column visibility in the `RecentStreamsTable` component.

## File Structure

```
src/
  components/
    KeyMetrics.js
    RecentStreamsTable.js
    RevenueDistribution
</rewritten_file>
```
