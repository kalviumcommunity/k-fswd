# Lab Exercise: Write Error Handling Code for Database Connection and Send Response that Connection Failed

🎯 **Objectives**
- Learn how to write robust error handling code for database connections.
- Understand how to send appropriate error responses to the client when a connection fails.

🔑 **Prerequisites**
- Basic knowledge of database connection and familiarity with a server-side language (like Node.js, Python, Java, etc.).

🚀 **Steps**
1. Open the `db.js` file.
2. The `startDatabase(mongoUri)` function is supposed to
connect to the database.
3. However, the function does not handle errors. If the connection fails, the function will throw an error and the server will crash.
4. Add a `try...catch` block to the `startDatabase(mongoUri)` function to handle errors.

    **Hint**: You can use the `console.error()` function to log the error to the console.
5. `connectionStatus` is a variable that stores the status of the database connection. It is set to `disconnected` by default.
6. If the connection is successful, set the `connectionStatus` variable to `connected`.
7. If the connection fails, set the `connectionStatus` variable to `failed`.
8. If the connection was closed by `stopDatabase()` function, set the `connectionStatus` variable to `disconnected`.


🎁 **Outcome**
- You will have a robust system that handles database connection errors gracefully and informs the client about the issue in a meaningful way.
