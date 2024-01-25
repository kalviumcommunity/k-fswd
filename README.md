# Lab Exercise: Create a Component with Dummy Data

## 🎯 Objectives

In this exercise, you will learn to create a React component that renders data from a JSON file. This will provide hands-on experience with data-driven component design in React.

## 🔑 Prerequisites

Prior experience with JavaScript, React, and understanding of JSON data format is required.

## 🚀 Steps

1. 📁 **Setup your project environment**: Start by setting up your React development environment. You can use vite command to create a new React project.

    ```bash
    npm create vite@latest
    ```

2. 📄 **Import the JSON data**: Import the `data.json` file into your component file. This will allow you to use the dummy data in your component.

    ```javascript
    import data from './data.json';
    ```

    Update the `data.json` file with your own data.

    Make sure you move the `data.json` file into the `src` folder of your project.

3. 🛠️ **Create a new Component**: Now create a new React component. This could be a functional or class-based component, depending on your preference.

    ```javascript
    function Profile() {
      // component code here
    }
    ```

    Create a simple Profile component that displays the data from the JSON file. Use your imagination and style the component however you like... or don't style it at all. 😄

4. 🎨 **Render the data**: In your component's render method, map over the imported data and display it. Remember to return a JSX element for each item in the data array.

    ```javascript
    function Profile() {
      // component code here
    }
    ```

## 🏁 Outcome

By the end of this exercise, you will have a functional React component that can render data from a JSON file. This is a key skill in creating dynamic, data-driven applications. 🎉
