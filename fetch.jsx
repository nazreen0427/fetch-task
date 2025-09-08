import React, { useEffect, useState } from "react";

function QuotesApp() {
  const [quotes, setQuotes] = useState([]);

  
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        
        setQuotes(data.quotes.slice(0, 10));
      })
      .catch((err) => console.error("Error fetching quotes:", err));
  }, []); 

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quotes List</h2>
      {quotes.map((q) => (
        <h1 key={q.id}>{q.quote}</h1>
      ))}
    </div>
  );
}

export default QuotesApp;
