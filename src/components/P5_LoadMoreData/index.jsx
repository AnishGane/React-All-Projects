import React, { useEffect, useState } from "react";
import "./style.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();

      //   console.log(data.products);

      if (data && data.products && data.products.length > 0) {
        setProducts((prev) => [...prev, ...data.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    // For Disabling the Load More button after reaching the limit of 100
    if (products && products.length === 100) setDisableBtn(true);
  }, [products]);

  if (loading) {
    return <div>Loading the data</div>;
  }

  return (
    <div className="load-more-container">
      {/* Products div */}
      <div className="product-container">
        {products && products.length > 0
          ? products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      {/* Button div */}
      <div className="button-container">
        <button disabled={disableBtn} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableBtn
          ? products.length === 100 &&
            "You have reached the limit of 100 products"
          : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
