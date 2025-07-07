import { useEffect } from "react";

function Home() {
  // const [data, setData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    chrome.storage.local.get(null, (items) => {
      // setData(items);
      console.log(items);
    });
  }, []);
  // if (isLoading) return <p>Loading...</p>
  return <h1>Home Page</h1>;
}

export default Home;
