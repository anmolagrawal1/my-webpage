import React from "react";
import "./Blog.css";

function Blog() {
  const blogPosts = [
    {
      title: "Refreshing Designs",
      category: "Resources",
      description:
        "Quench satisfying designs to help you stir up emotion and tell a story.",
      imgUrl:
        "https://images.unsplash.com/photo-1571032555647-37380b4bdfe5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "#9B51E0",
    },
    {
      title: "Healthier Lifestyle",
      category: "Lifestyle",
      description:
        "Living a healthier lifestyle will help with your productivity and your mind-set.",
      imgUrl:
        "https://media.istockphoto.com/id/1402330779/photo/many-fresh-ripe-mandarin-with-green-leaves-on-colored-background-top-view-space-for-text.jpg?s=612x612&w=0&k=20&c=TNbzXFBQQSTmVHIpO-K0Z8UquEXKVOKLe0toFrbEyTU=",
      bgColor: "#2D9CDB",
    },
    {
      title: "Gaming Evolution",
      category: "Entertainment",
      description:
        "Learn about the evolution of gaming and how it started a revolution.",
      imgUrl:
        "https://img.freepik.com/premium-photo/retro-computer-gaming-controllers-bright-yellow-background_1041545-10328.jpg?w=2000",
      bgColor: "#F2C94C",
    },
  ];

  return (
    <div className="blog-section">
      <h1>The Project Blog</h1>
      <p>Designs and layouts to help you with your app.</p>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="blog-card"
            style={{ backgroundColor: post.bgColor }}
          >
            <div className="image-container">
              <img src={post.imgUrl} alt={post.title} />
            </div>
            <div className="content">
              <span className="category">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
