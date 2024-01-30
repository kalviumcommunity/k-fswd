# Lab Exercise: Data Validation with JOI Based on Roles

## 🎯 Objectives

This exercise will guide you through using JOI to validate data in a Node.js application based on different user roles.

## 🔑 Prerequisites

Familiarity with Node.js and basic understanding of user roles in web applications.

## 🚀 Steps

1. Install JOI in your project by running `npm install joi` in the terminal.

2. In your request handling module (e.g., `handleRequest.js`), import JOI.

3. Identify the user's role from the request data (e.g., `req.body.role`).

4. Construct a JOI validation logic that changes based on the identified role. For example, use `Joi.string().valid('admin', 'user')` to validate the role field, and then conditionally allow or deny specific fields in the data object based on this role.

5. Apply this dynamic JOI validation within your request handling function to validate incoming data according to the user's role.

6. Test the validation by sending requests with different role data using  [Bruno](https://www.usebruno.com/).

7. Handle validation errors gracefully, returning meaningful error messages to the client.

## 🎁 Outcome

Successfully implement role-based data validation in your Node.js application using JOI. 🌟🛡️
