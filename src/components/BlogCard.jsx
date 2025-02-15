import React from "react";

function BlogCard({ image, title, description }) {
  return (
    <div className="blog-card">
      <img draggable="false" src={image} alt="Main Card Image" />
      <div className="info">
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>
        <button>Zobraziť viac</button>
      </div>
    </div>
  );
}

export default BlogCard;
