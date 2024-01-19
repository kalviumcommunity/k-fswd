# Lab Exercise: Returning Data Based on the ENV Variable

## 🎯 Objectives

In this lesson, we'll learn how to configure applications to return different data based on the environment variable. This is crucial for managing different environments in full stack development.

## 📚 Prerequisites

You should be familiar with JavaScript and have a basic understanding of environment variables.

## 🚀 Steps

1. **Install dotenv**: Use `yarn add dotenv` to install the dotenv package. This package allows us to use the environment variables that we defined in the `.env` file.

2. **Require dotenv in Your File**: At the top of your main file, add `require('dotenv').config()`. This will load the environment variables from `.env`.

3. **Define the Environment Variables**: In your `.env` file, define the environment variables that you want to use. For example, you may want to define a variable called `IS_ADMIN` and set it to 'true' or 'false'.

4. **Use process.env**: Now, you can access your environment variables anywhere in your application using `process.env.YOUR_VARIABLE`.

5. **Return Different Data**: Based on the environment variable's value, you can now conditionally return different data. For example, you may want to return a different set of data when the `IS_ADMIN` variable is set to 'true' or 'false'. See the comments in the `server.js` file for more details.

## 🏁 Outcome

By the end of this module, you'll be able to manipulate your application's behavior using environment variables, a key skill in full stack development. 🎉 This will allow you to handle different environments more efficiently and securely. 💼🔐
