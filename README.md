# Lab Exercise: Creating a Dual-Port Express App

## 🎯 Objectives
- Understand and implement an Express.js application that runs on two different ports simultaneously.
- Learn to manage and configure environment variables effectively in Node.js.

## 📚 Prerequisites
- Basic knowledge of Node.js, Express.js, and environment variables is required.

## 🚀 Steps

1. **Initialize your project**: Setup your Node.js project by initializing npm and installing the Express.js framework. You can do this by running the commands `npm init -y` and `npm install express` respectively in your terminal.

2. **Create your Express app**: In your main JavaScript file, create an Express application by calling the express function.

3. **Configure your ports**: Define two different ports for your application to run on. These will be `PUBLIC_PORT` and `SECONDARY_PUBLIC_PORT`. You should store these in your environment variables for better security and configurability.

4. **Create your server**: Setup your Express app to listen on both `PUBLIC_PORT` and `SECONDARY_PUBLIC_PORT`. You'll need to create two separate instances of the http server, each listening on a different port.

5. **Define routes**: Define at least one route (like a simple GET route to the homepage) to test your application. 

6. **Test your application**: Use a tool like Postman or simply your web browser to ensure your application is running correctly on both ports.

## 🏁 Outcome
By the end of this lab exercise, you will have a functional Express.js application running on two different ports simultaneously. This will enhance your understanding of server setup and environment configuration in Node.js. 🚀🎉

Remember, practice makes perfect. Keep coding! 💻👍
