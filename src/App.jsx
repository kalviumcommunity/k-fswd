import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  // Fetch the data from the API
	// The API is available at `https://jsonplaceholder.typicode.com/posts`

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
