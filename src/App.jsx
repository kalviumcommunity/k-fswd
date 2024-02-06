import DataLoader from "./components/DataLoader";

// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  // 1. Search for a npm react package that can making creating a
  //    a toast notification easy.
  // 2. Install the package and import it here.
  // 3. Use the package to display a toast notification with the message.
  // 4. Use the DataLoader component to fetch the posts from the API.
  return <DataLoader />;
}

export default App;
