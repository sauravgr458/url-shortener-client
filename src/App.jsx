import { useEffect, useState } from "react";
import UrlForm from "./components/UrlForm";
import TopUrls from "./components/TopUrls";
import { fetchTopUrls } from "./Api";
import { useRef } from "react";

export default function App() {
  const [urls, setUrls] = useState([]);

  const loadUrls = () => {
    fetchTopUrls()
      .then((res) => setUrls(res.data.urls || []))
      .catch((error) => console.error("Error loading URLs:", error));
  };
  const didFetch = useRef(false);

  useEffect(() => {
    if (!didFetch.current) {
      loadUrls();
      didFetch.current = true;
    }
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">🔗 URL Shortener</h1>
      <UrlForm onShortened={loadUrls} />
      <TopUrls urls={urls} />
    </div>
  );
}
