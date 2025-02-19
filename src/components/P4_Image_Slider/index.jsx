import React, { useEffect, useState, useCallback } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  // Memoized fetch function
  const fetchImages = useCallback(
    async (getUrl) => {
      try {
        setLoading(true);
        const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
        const data = await res.json();

        if (data) {
          setImages(data);
        }
      } catch (err) {
        setErrMsg(err.message);
      } finally {
        setLoading(false);
      }
    },
    [page, limit]
  );

  const handlePrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    if (url) fetchImages(url);
  }, [url, fetchImages]);

  if (loading) {
    return <div>Images Loading. Please wait</div>;
  }

  if (errMsg !== null) {
    return <div>Error Occurred: {errMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images.length > 0 ? (
        images.map((image, index) => (
          <img
            src={image.download_url}
            alt={image.author}
            key={image.id}
            className={
              currentSlide === index
                ? "current-image"
                : "current-image hide-current-image"
            }
          />
        ))
      ) : (
        <div>No Images Found</div>
      )}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />

      <span className="circle-indicators">
        {images.map((image, index) => (
          <span
            key={image.id}
            className={`current-indicator ${
              currentSlide !== index ? "inactive-indicator" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </span>
    </div>
  );
};

export default ImageSlider;
