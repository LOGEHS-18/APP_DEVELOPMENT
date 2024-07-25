// src/components/Blog.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Blog() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <h1 className="mb-4">Blog Title</h1>
          <div className="mb-4">
            <h2 className="h5">Blog Post Title</h2>
            <p className="text-muted">Posted on January 1, 2024 by Admin</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
          <div className="mb-4">
            <h2 className="h5">Another Blog Post Title</h2>
            <p className="text-muted">Posted on February 2, 2024 by Admin</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
          <div className="mb-4">
            <h2 className="h5">Another Blog Post Title</h2>
            <p className="text-muted">Posted on February 2, 2024 by Admin</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
          {/* Add more blog posts as needed */}
        </div>
        <div className="col-lg-4">
          <div className="p-4 mb-4 bg-light rounded">
            <h4 className="font-italic">About</h4>
            <p className="mb-0">This is a simple blog page using React and Bootstrap. You can add more content and customize it as needed.</p>
          </div>
          <div className="p-4">
            <h4 className="font-italic">Archives</h4>
            <ol className="list-unstyled mb-0">
              <li><a href="#">March 2024</a></li>
              <li><a href="#">February 2024</a></li>
              <li><a href="#">January 2024</a></li>
              {/* Add more archive links as needed */}
            </ol>
          </div>
          <div className="p-4">
            <h4 className="font-italic">Elsewhere</h4>
            <ol className="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
