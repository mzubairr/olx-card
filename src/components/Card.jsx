import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";

const Card = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="products-list">
        {products ? (
          products.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="cardImg">
                  <img src={item.images} alt="Card-IMG" />
                </div>
                <div className="card-content">
                  <div className="price-icon">
                    <div className="item-price">Rs {item.price}</div>
                    <div className="heart-icon">
                      <i className="fa-regular fa-heart"></i>
                    </div>
                  </div>
                  <p className="item-text">{item.description}</p>
                  <div className="item-info">
                    <p className="item-location">G-11, Islamabad</p>
                    <p className="item-postdate">5 days ago</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default Card;
