# Lab Exercise: Implement Delete API with Loading and Toast Notifications 🔄🍞

## 🎯 Objectives
To understand the implementation of a Delete API in a full-stack application, focusing on showing a loading state during the API call and toast notifications for success or error outcomes.

## 🧩 Prerequisites
Familiarity with RESTful APIs, basic knowledge of front-end and back-end development, and understanding of state management in UI components.

## 📝 Steps

0. **Select a Suitable API**: The `API_URI` is provided in the `src/App.jsx` file. You will use this URL to make requests to the API.
   > Note: If you are unable to find the `API_URI`, please reach out to your mentor.

1. **Create a Front-End Function**: In your front-end application, write a function to call the Delete API. This will be in a React component.

2. **Implement Loading State**: Introduce a loading state in your UI. Display a spinner or a loading message when the delete request is initiated.

3. **Call the Delete API**: Use the function created in step 2 to call the API. Make sure to handle the loading state appropriately before and after the call.

4. **Toast Notifications**: Implement toast notifications for success and error messages. These should be triggered after the API response is received. Explore and select a suitable `NPM` package for toast notifications. Install it using `npm` or `yarn`.

5. **State Update on Success/Error**: Update the UI state based on the response. Remove the loading indicator and display the appropriate toast notification.

6. **Handle Exceptions**: Include try-catch blocks or equivalent error handling to manage any unexpected issues during the API call.

7. **Testing the Implementation**: Test your application to ensure that the delete functionality works as expected, with proper loading and toast notifications.

## 🏁 Outcome

Upon completing this exercise, you'll have enhanced your full-stack development skills by integrating a Delete API with a responsive UI that manages loading states and provides user feedback through toast notifications. 🌟
