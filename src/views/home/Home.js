import React from "react";
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {

  const { theme, toggleTheme } = useTheme();
  
  return (
    
    <div className="row row-cols-1 row-cols-md-1 g-4 mt-2">
      <div className="col">
        <div className="card">
          <div className="card-body-home">
            <Link className={theme === 'fluffy' ? 'fluffyTheme' : ''} to="/photos">
              See photo gallery
            </Link>
            <button className="myToggleButton" onClick={toggleTheme}>{theme}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
