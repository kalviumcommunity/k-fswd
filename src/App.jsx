import { useState } from "react";
import "./App.css";

function App() {
  const [img, setImg] = useState("");

  const handleClick = () => {
    // your code here
  };

  return (
    <div className="App">
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button onClick={handleClick}>Upload</button>      
    </div>
  );
}

export default App;
