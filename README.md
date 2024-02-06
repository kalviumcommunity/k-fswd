# Lab Exercise: Building a Node.js Server with Caching

Welcome to our course module where you'll learn to build a Node.js server that serves data from a local JSON file and implements caching for enhanced performance. This hands-on project is designed to improve your backend development skills and understanding of caching mechanisms.

## Objectives 🎯

- Create a Node.js server that serves data stored in a local JSON file.
- Implement caching with `node-cache` to optimize data serving performance.

## Prerequisites 📚

- Basic knowledge of JavaScript and Node.js.
- Familiarity with the Express framework.

## Steps 🛠️

1. **Install node-cache**: Install `node-cache` by running command `npm i node-cache`.

2. **Implement `node-cache`**: Integrate `node-cache` into your project. Initialize it at the top of your main server file.

3. **Serve JSON Data with Caching**: When a request is received for your data, first check if the data is present in the cache. If it is, serve it from the cache. If not, read the data from the `data.json` file, store it in the cache with an appropriate TTL (Time To Live), and then serve it.

4. **Testing Your Server**: Ensure your server responds correctly to requests for data. Use a tool like Postman or a simple browser request to test the functionality. Check the performance improvement by comparing the response time of cached data vs. non-cached data.

5. **Error Handling and Logging**: Implement error handling for potential issues like reading the JSON file and cache operation failures. Add logging to help with debugging and monitoring the server's behavior.

## Outcome 🏁

By completing this module, you will have built a Node.js server that efficiently serves data from a JSON file using caching, significantly improving response times and reducing disk read operations.