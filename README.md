# Lab Exercise: Create a Component to Render Data from JSON as Cards

## 🎯 Objectives

- Learn to fetch and process data from a `data.json` file.
- Render this data as a series of visually appealing cards in a web application.

## 📋 Prerequisites
- Basic understanding of HTML, CSS, and JavaScript (or a JS framework).

## 🛠 Steps

1. 📁 Setup your project environment: Start by setting up your React development environment. You can use vite command to create a new React project.
   ```bash
   npm init vite@latest
   ```

2. 📄 Import the JSON data: Import the data.json file into your component file. This will allow you to use the dummy data in your component.
    ```
    import data from './data.json';
    ```

    Update the data.json file with your own data.

    Make sure you move the data.json file into the src folder of your project.

3. 🛠️ Create a new Component:  Design a card component that can display object data.
   ```jsx
   function UserCard(props) {
    //component code here
   }
   ```
   Apply CSS to style the cards for an appealing and responsive layout.

4. 🎨 Render the data: Ensure the component correctly renders all data and handles errors or empty data scenarios.

## 🌟 Outcome

By the end of this task, you'll be able to dynamically render a set of cards from JSON data, showcasing your full-stack development skills. 🚀
