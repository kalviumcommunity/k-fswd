import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:8000/api/country")
        .then((res) => {
          setResponse(res.data.list);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <>
      {response.map((country) => {
        return (
          <div key={country._id}>
            <h2>Country: {country.name}</h2>
            <p>Code: {country.country_code}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
