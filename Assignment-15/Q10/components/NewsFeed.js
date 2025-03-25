import React, { useState, useEffect } from "react";
import "./NewsFeed.css";

// Mock News Data (simulating API response)
const mockNewsData = [
  {
    id: 1,
    title: "Global Climate Summit Announces New Initiatives",
    description:
      "World leaders gather to discuss critical environmental strategies and long-term sustainability goals.",
    author: "Emma Rodriguez",
    publishedAt: "2024-03-15",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Breakthrough in Renewable Energy Technology",
    description:
      "Scientists develop a more efficient solar panel with unprecedented energy conversion rates.",
    author: "Michael Chen",
    publishedAt: "2024-03-14",
  },
  {
    id: 3,
    title: "AI Advances Revolutionize Medical Diagnostics",
    description:
      "Machine learning algorithms show remarkable accuracy in early disease detection.",
    author: "Sarah Johnson",
    publishedAt: "2024-03-13",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Space Exploration: New Mission to Mars Announced",
    description:
      "International space agencies collaborate on groundbreaking interplanetary research mission.",
    author: "David Kumar",
    publishedAt: "2024-03-12",
  },
  {
    id: 5,
    title: "Global Economic Outlook Shows Promising Signs",
    description:
      "Economic experts predict gradual recovery and innovative market strategies.",
    author: "Maria Gonzalez",
    publishedAt: "2024-03-11",
  },
];

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchNews = async () => {
      try {
        // In a real application, replace with actual API call
        setIsLoading(true);
        // Simulating network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setNews(mockNewsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch news", error);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Inline style for featured articles
  const getFeaturedStyle = (isFeatured) => ({
    backgroundColor: isFeatured ? "#f0f4f8" : "transparent",
    border: isFeatured ? "2px solid #007bff" : "1px solid #e0e0e0",
    transform: isFeatured ? "scale(1.02)" : "scale(1)",
    boxShadow: isFeatured
      ? "0 4px 6px rgba(0, 123, 255, 0.2)"
      : "0 2px 4px rgba(0,0,0,0.1)",
  });

  if (isLoading) {
    return (
      <div className="news-feed-container">
        <div className="loading-spinner">Loading News...</div>
      </div>
    );
  }

  return (
    <div className="news-feed-container">
      <h1 className="news-feed-title">Latest News</h1>

      <div className="news-grid">
        {news.map((article) => (
          <div
            key={article.id}
            className="news-card"
            style={getFeaturedStyle(article.isFeatured)}
          >
            <div className="news-header">
              <h2 className="news-title">{article.title}</h2>
              <span className="news-date">{article.publishedAt}</span>
            </div>

            <p className="news-description">{article.description}</p>

            <div className="news-footer">
              <span className="news-author">By {article.author}</span>
              {article.isFeatured && (
                <span className="featured-badge">Featured</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
