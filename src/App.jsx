import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  // 1. Fetch data from the API - https://jsonplaceholder.typicode.com/posts
  // 2.Use the 'fetch' function to fetch data from the API
  // 3. Convert the response to JSON
  // 4. Set the data to the state
  // 5. Display the data in the browser
  // 6. Import the 'Post' component
  // 7. Map over the data and return the 'Post' component
  // 8. Display the data in the 'Post' component


  return <>{JSON.stringify({ data }, null, 2)}</>;
}

export default App;
