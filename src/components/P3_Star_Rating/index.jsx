import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    // we are setting the hover rating to the current rating
    setHover(rating);
  };

  return (
    <div className="starRating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            size={40}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
