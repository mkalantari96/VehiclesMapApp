# Vehicle Management Application

This application provides an interactive map-based interface for managing a fleet of vehicles. It offers features for viewing, adding, and removing vehicles, as well as filtering them based on various criteria.
![show maps and list of vehicles and filter box and popup a detail of vehicle](UI-Image.png)

## Features

1. **Interactive Map View**

   - Displays vehicles as markers on a map
   - Clicking a marker shows a popup with detailed vehicle information

2. **Vehicle Management**

   - Add new vehicles by clicking on the map or using an "Add" button
   - Remove existing vehicles by clicking on their markers

3. **Filtering Capabilities**

   - Filter vehicles by:
     - VIN
     - Plate number
     - Charging status
     - Availability for rental

4. **Performance Optimizations**

   - Implements lazy loading for efficient data fetching
   - Utilizes `useMemo`, `useEffect` and `callBack`for optimized rendering of components
   -

5. **State Management**
   - Uses Redux Toolkit for centralized state management

## Performance Considerations

- The application uses lazy loading to efficiently fetch and display large sets of vehicle data.
- React's `useMemo` hook is employed to optimize rendering performance, particularly for the vehicle list and map components.
- Redux Toolkit is used for efficient state management, helping to maintain a clear and performant data flow throughout the application.

## Testing

The application includes unit tests for critical functionality, including:

- Adding new vehicles
- Redux state management
- Utility functions

To run the tests, use the command `npm test`.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Run tests: `npm test`
