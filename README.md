# Lab Exercise: Dynamic Data Filtering and Display in a Full Stack Application

## 🎯 Objectives

This lab will guide you through enhancing a data schema with new information, implementing dynamic data filtering based on user input in a web application, and rendering the filtered data. Learn to adapt your full stack development skills to include interactive data visualization.

## 🔑 Prerequisites

Proficiency in MongoDB and React is required.

## 🚀 Steps

1. **Start the Server**: First run your server through the following commands:

   ```
     cd server
     yarn
     yarn start
   ```

2. **Update your MongoDB schema**: Add a 'continent' field to your countries collection.

3. **Populate the 'continent' field**: For each country in your collection, fill in the correct continent.

4. **Find the URL where the server is running**: Please navigate to the settings icon located in the navigation sidebar. Within the settings, you will find a URL indicating where the server is currently running. The URL should end with .codedamn.app.

5. **Implement a continent dropdown in the UI**: Add a dropdown menu to your React frontend that lists all available continents.

6. **Fetch and display filtered data**: Modify your frontend logic to fetch and display countries based on the selected continent from the dropdown.

7. **Ensure responsive UI updates**: Implement state management to ensure the UI dynamically updates to display the filtered list of countries upon selecting a continent.

## 🏁 Outcome

By completing this lab, you will have created a dynamic web application capable of filtering and rendering data based on user interaction, a valuable skill in full stack development. 🌐
