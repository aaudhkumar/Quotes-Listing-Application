import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/quotes")
      .then((res) => res.json())
      .then((data) => {
        // Log the full response so you can inspect the shape in DevTools
        console.log("API response:", data);

        // freeapi.app wraps results as: { data: { data: [...] } }
        // but sometimes it's just { data: [...] } — handle both
        const list =
          Array.isArray(data?.data?.data)
            ? data.data.data
            : Array.isArray(data?.data)
            ? data.data
            : [];

        setQuotes(list);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch quotes.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="center">Loading quotes...</div>;
  if (error) return <div className="center">{error}</div>;
  if (quotes.length === 0)
    return (
      <div className="center">
        No quotes found. Check the console for the API response shape.
      </div>
    );

  return (
    <div className="page">
      <header className="header">
        <h1 className="title">✦ Quote Gallery</h1>
        <p className="subtitle">{quotes.length} quotes to inspire you</p>
      </header>

      <div className="grid">
        {quotes.map((quote, index) => {
          // freeapi.app quote objects use "quote" for text and "author" for name
          // some APIs use "content" or "text" — fall back gracefully
          const text = quote.quote || quote.content || quote.text || "";
          const author = quote.author || quote.name || "Unknown";
          const category = quote.category || quote.tags?.[0] || "";

          return (
            <div key={quote.id ?? index} className="card">
              <div className="quote-mark">"</div>
              <p className="quote-text">{text}</p>
              <hr className="divider" />
              <div className="card-footer">
                <span className="author">— {author}</span>
                {category && <span className="category">{category}</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}