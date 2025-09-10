import React, { useState, useEffect } from "react";

const resources = [
  {
    title: "Library Link",
    type: "pdf",
    url: "https://share.google/5HGyArSaDQT2Aao9G",
  },
];

export default function Library() {
  const [ratings, setRatings] = useState(resources.map(() => 0));
  const [bookmarks, setBookmarks] = useState(resources.map(() => false));

  useEffect(() => {
    const savedBookmarks = localStorage.getItem("libraryBookmarks");
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  const handleRating = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  const handleBookmark = (index) => {
    const newBookmarks = [...bookmarks];
    newBookmarks[index] = !newBookmarks[index];
    setBookmarks(newBookmarks);
    localStorage.setItem("libraryBookmarks", JSON.stringify(newBookmarks));
  };

  const renderStars = (rating, index) => {
    return (
      <div style={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{ ...styles.star, color: star <= rating ? "#ffd700" : "#ccc" }}
            onClick={() => handleRating(index, star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const pdfResources = resources.filter((res) => res.type === "pdf");

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📖 Welcome to our library</h2>
      <div style={styles.tips}>
        <h3 style={styles.tipsHeading}>💡 Tips for Using the Library</h3>
        <ul style={styles.tipsList}>
          <li>Rate resources to help others find quality materials.</li>
          <li>Bookmark your favorite resources for quick access.</li>
          <li>Explore different categories for organized learning.</li>
        </ul>
      </div>
      <div style={styles.pdfSection}>
        {pdfResources.map((res, index) => (
          <div key={index} style={styles.card}>
            <h4 style={styles.title}>{res.title}</h4>
            <div style={styles.actions}>
              {renderStars(ratings[index], index)}
              <button
                style={{ ...styles.bookmark, color: bookmarks[index] ? "#3b82f6" : "#ccc" }}
                onClick={() => handleBookmark(index)}
              >
                🔖
              </button>
            </div>
            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Open Library Resource 
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    padding: "20px",
    background: "linear-gradient(135deg, #3b82f6, #9333ea)",
    color: "#000",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "bold",
    color: "#fff",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  tips: {
    background: "#fff",
    padding: "16px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  tipsHeading: {
    marginBottom: "12px",
    fontSize: "20px",
    fontWeight: "600",
    color: "#333",
  },
  tipsList: {
    listStyleType: "disc",
    paddingLeft: "20px",
    color: "#555",
  },
  pdfSection: {
    background: "#fff",
    padding: "24px",
    borderRadius: "16px",
    overflowY: "auto",
    flexGrow: 1,
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  },
  card: {
    background: "#f9f9f9",
    padding: "16px",
    marginBottom: "16px",
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    transition: "transform 0.2s",
  },
  title: {
    marginBottom: "12px",
    fontSize: "18px",
    fontWeight: "600",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  stars: {
    display: "flex",
    cursor: "pointer",
  },
  star: {
    fontSize: "20px",
    marginRight: "4px",
  },
  bookmark: {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
  },
  link: {
    color: "#3b82f6",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
};
