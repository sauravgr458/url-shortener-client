import { useState } from "react";
import { shortenUrl } from "../Api";

export default function UrlForm({ onShortened }) {
  const [url, setUrl] = useState("");
  const [shortened, setShortened] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setShortened(null);
    setLoading(true);
    try {
      const res = await shortenUrl(url);
      setShortened(res.data.short_url);
      setUrl(""); // ✅ Clear input
      if (onShortened) onShortened(); // ✅ Reload Top 100
    } catch (err) {
      const msg =
        err?.response?.data?.errors?.[0] || "Invalid URL or server error.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card shadow p-4 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Enter Full URL:</label>
          <input
            type="text"
            className="form-control"
            value={url}
            required
            disabled={loading}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
      </form>

      {shortened && (
        <div className="alert alert-success mt-3">
          Shortened URL:{" "}
          <a href={shortened} target="_blank" rel="noopener noreferrer">
            {shortened}
          </a>
        </div>
      )}

      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
}
