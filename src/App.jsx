import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  // Fetch the data from the API
  // The API is available at `http://localhost:1338/doors`

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
