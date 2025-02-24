// Import required dependencies from React
import React, { useEffect, useState } from "react";
// Import CSS styles for the scroll indicator
import "./scroll.css";

// ScrollIndicator component that takes a URL prop for fetching data
const ScrollIndicator = ({ url }) => {
  // State to store the fetched data
  const [data, setData] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(false);
  // State to store any error messages
  const [error, setError] = useState("");
  // State to track scroll percentage
  const [scrollPercent, setScrollPercent] = useState(0);

  // Async function to fetch data from the provided URL
  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      // If data contains products, update the data state
      if (data && data.products) {
        setData(data.products);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  // Effect hook to fetch data when URL changes
  useEffect(() => {
    fetchData(url);
  }, [url]);

  // Function to calculate and update scroll percentage
  function hanldeScroll() {
    // Get how much the user has scrolled (works for different browsers)
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    // Calculate total scrollable height
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // Calculate and set scroll percentage
    setScrollPercent((howMuchScrolled / height) * 100);
  }

  // Effect hook to add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", hanldeScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  // Show loading state
  if (loading) return <div>Loading...</div>;
  // Show error state if any
  if (error) return <div>Error: {error}</div>;

  // Render the component
  return (
    <div>
      {/* Fixed header container with scroll indicator */}
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        {/* Container for scroll progress bar */}
        <div className="scroll-progress-tracking-container">
          {/* Progress bar that updates width based on scroll percentage */}
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Container for displaying fetched data */}
      <div className="data-container">
        {/* Map through data if available, otherwise show "No data" message */}
        {data && data.length > 0
          ? data.map((item) => <p key={item.id}>{item.title}</p>)
          : "No data available"}
      </div>
    </div>
  );
};

export default ScrollIndicator;
