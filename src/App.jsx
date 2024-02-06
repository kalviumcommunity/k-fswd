import { useState, useEffect } from "react";
import axios from "axios";

const API_URI = `https://${import.meta.env.VITE_API_URI}/api`;

function App() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${API_URI}/country`)
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
