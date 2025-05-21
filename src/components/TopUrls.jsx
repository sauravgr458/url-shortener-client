const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000/";

export default function TopUrls({ urls }) {
  return (
    <div className="card shadow p-4">
      <h2 className="h4 mb-3">Top 100 Shortened URLs</h2>
      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead>
            <tr>
              <th>Short URL</th>
              <th>Original URL</th>
              <th>Clicks</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <a
                    href={BASE_URL + item.short_code}
                    rel="noopener noreferrer"
                  >
                    {BASE_URL + item.short_code}
                  </a>
                </td>
                <td className="text-truncate" style={{ maxWidth: "250px" }}>
                  <a
                    href={item.full_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.full_url}
                  </a>
                </td>
                <td>{item.click_count}</td>
                <td>{item.title || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
