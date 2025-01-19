import React from "react";
import "../MainBody.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MainBody = () => {
  return (
    <main>
      {/* Category Navigation Bar */}
      <div className="category-bar bg-light py-3">
        <div className="container d-flex justify-content-between">
          {[
            "Grocery",
            "Mobiles",
            "Fashion",
            "Electronics",
            "Home & Furniture",
            "Appliances",
            "Travel",
            "Beauty, Toys & More",
            "Two Wheelers",
          ].map((category, index) => (
            <div key={index} className="text-center">
              <i
                className="fas fa-box-open mb-1"
                style={{ fontSize: "24px", color: "#ff5722" }}
              ></i>
              <p className="m-0 small">{category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Section */}
      <div id="promoCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src="./Asset/CryoDragon-Slider-Arctic-Background-with-Water-3000w-1200x400.jpg"  className="d-block w-100" alt="Description" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Flights to Kuala Lumpur</h5>
              <p>Up to 20% Off - Use Code: FLYMH</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://via.placeholder.com/1200x400"
              className="d-block w-100"
              alt="Slide 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Shop Smart Electronics</h5>
              <p>Discounts on Watches, Monitors, and More!</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#promoCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#promoCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Product Grid */}
      <div className="product-grid py-4">
        <div className="container">
          <h4 className="mb-3">Best of Electronics</h4>
          <div className="row">
            {[
              {
                name: "Fastrack Smartwatches",
                price: "₹1,399",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Best of Shavers",
                price: "₹1,649",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Projector",
                price: "₹6,990",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "boAt Smartwatches",
                price: "₹2,399",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Monitors",
                price: "₹6,599",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Printers",
                price: "₹2,336",
                img: "https://via.placeholder.com/150",
              },
            ].map((product, index) => (
              <div className="col-md-2 col-6 mb-4" key={index}>
                <div className="card h-100 text-center">
                  <img
                    src={product.img}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <p className="card-text text-success">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       {/* Product Grid */}
       <div className="product-grid py-4">
        <div className="container">
          <h4 className="mb-3">Best of Electronics</h4>
          <div className="row">
            {[
              {
                name: "Fastrack Smartwatches",
                price: "₹1,399",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Best of Shavers",
                price: "₹1,649",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Projector",
                price: "₹6,990",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "boAt Smartwatches",
                price: "₹2,399",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Monitors",
                price: "₹6,599",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Printers",
                price: "₹2,336",
                img: "https://via.placeholder.com/150",
              },
            ].map((product, index) => (
              <div className="col-md-2 col-6 mb-4" key={index}>
                <div className="card h-100 text-center">
                  <img
                    src={product.img}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <p className="card-text text-success">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       {/* Product Grid */}
       <div className="product-grid py-4">
        <div className="container">
          <h4 className="mb-3">Best of Electronics</h4>
          <div className="row">
            {[
              {
                name: "Fastrack Smartwatches",
                price: "₹1,399",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Best of Shavers",
                price: "₹1,649",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Projector",
                price: "₹6,990",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "boAt Smartwatches",
                price: "₹2,399",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Monitors",
                price: "₹6,599",
                img: "https://via.placeholder.com/150",
              },
              {
                name: "Printers",
                price: "₹2,336",
                img: "https://via.placeholder.com/150",
              },
            ].map((product, index) => (
              <div className="col-md-2 col-6 mb-4" key={index}>
                <div className="card h-100 text-center">
                  <img
                    src={product.img}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <p className="card-text text-success">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainBody;
