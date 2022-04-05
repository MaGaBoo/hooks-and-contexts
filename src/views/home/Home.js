import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="row row-cols-1 row-cols-md-1 g-4 mt-2">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <Link className="myLink" to="/photos">
              See photo gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
