import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ShowRecipes() {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/');
      setRecipes(response.data);
    } catch (error) {
      console.error("There was an error fetching the recipes!", error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  // Styles for the images
  const imageStyle = {
    height: '200px',
    objectFit: 'cover',
    transition: 'transform 0.5s ease, box-shadow 0.5s ease', // Smooth transitions for transform and shadow
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    borderRadius: '10px' // Rounded corners
  };

  // Function to handle mouse hover events
  const handleMouseOver = (e) => {
    e.target.style.transform = 'scale(1.05)'; // Enlarge the image
    e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Increase shadow
  };

  // Function to handle mouse out events
  const handleMouseOut = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  };

  return (
    <div className="container">
      <h1 className="my-4">Recipes</h1>
      <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4 mb-4">
            <div className="card">
              {recipe.image && (
                <img
                  src={recipe.image}
                  className="card-img-top"
                  alt={recipe.name}
                  style={imageStyle}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">{recipe.description}</p>
                <div className="d-flex justify-content-end">
                  <Link to={`/recipedetail/${recipe.id}`} className="btn btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowRecipes;
