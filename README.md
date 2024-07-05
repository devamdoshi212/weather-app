# Weather Dashboard Application

## Description
This project is a weather dashboard application built using React and Material-UI. It allows users to search for cities and view current weather information along with a 7-day forecast. The application integrates with a weather API (WeatherAPI) to fetch real-time weather data.

## Objectives
- Fetch and display real-time weather data for cities.
- Implement data visualization for temperature trends using charts.
- Ensure responsiveness and mobile-friendliness.

## Requirements

1. **Setup React Application**
   - Initialize a new React project using Create React App.
   - Integrate Material-UI for styling and UI components.

3. **Search Functionality**
   - Implement a search bar for city searches.
   - Use WeatherAPI to fetch weather data for the searched city.
   - Display search suggestions as users type.

4. **Display Current Weather**
   - Show current weather information (temperature, humidity, wind speed, conditions) for the selected city.
   - Use Material-UI components like Card and Typography for styling.

5. **7-Day Forecast**
   - Display a forecast for the next 7 days including daily temperatures, weather conditions, and precipitation.
   - Enhance visualization using Material-UI components and icons.

6. **Data Visualization**
   - Implement charts (line or bar charts) using a library like Chart.js or Recharts to visualize temperature trends over 7 days.

7. **Responsive Design**
   - Ensure the application layout is responsive and works well on various devices using Material-UI’s grid system and responsive utilities.

8. **Error Handling**
   - Gracefully handle errors such as failed API requests or invalid city names.
   - Display appropriate error messages to users.

## Technologies Used
- React
- Material-UI
- Redux Toolkit (asyncThunk for API calls)
- WeatherAPI (or alternative weather API)
- Chart.js or Recharts (for data visualization)

## Installation
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application with `npm start`.

## Usage
- Open the application in your browser.
- Search for a city using the search bar.
- View current weather and 7-day forecast.
- Explore temperature trends with visual charts.

