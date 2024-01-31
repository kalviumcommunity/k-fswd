import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
