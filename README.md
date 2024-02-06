# Lab Exercise: Show Loading and Toast on Success and Error 🔄🔔

## Objectives 🎯
To develop an understanding of how to implement UI feedback mechanisms in web applications, particularly by showing loading indicators and toast notifications for success and error messages.

## Prerequisites 🧩
Familiarity with JavaScript and basic understanding of React.

## Steps 📝

1. **Implement Loading Indicator**: Add a loading indicator, such as a spinner or progress bar, that activates when an action is in progress (like an API call). This indicator should be visible until the action is complete.

2. **Calling  API**: The `API_URI` is provided in the `src/App.jsx` file. You will use this URL to make requests to the API.
   > Note: If you are unable to find the `API_URI`, please reach out to your mentor

3. **Manage UI States**: Introduce state management to control the visibility of the loading indicator and toast notifications based on the API call's success or failure.

4. **Add Toast Notifications**: Implement toast notifications for success and error messages. These should be triggered after the API response is received. Explore and select a suitable `NPM` package for toast notifications. Install it using `npm` or `yarn`.

5. **Error Handling**: Ensure your application handles errors gracefully, displaying a relevant message to the user through a toast notification.

6. **Testing User Interactions**: Test the application to ensure that the loading indicator and toast notifications are functioning as expected under different scenarios (success, error, no response).

## Outcome 🏁
Successfully completing this exercise will enhance your skills in managing UI states and providing instant user feedback in web applications, a vital aspect of full-stack development. 🌟
