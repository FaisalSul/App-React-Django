import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  const getRecipe = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/${id}/`);
      setRecipe(response.data);
    } catch (error) {
      console.error(`Error fetching recipe with ID ${id}:`, error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/${id}/`);
      window.location.href = '/ShowRecipes';  // Redirects to ShowRecipes after delete
    } catch (error) {
      console.error(`Error deleting recipe with ID ${id}:`, error);
    }
  };

  if (!recipe) return <div>Loading...</div>;

  // Styles for the images
  const imageStyle = {
    height: '200px',
    objectFit: 'cover',
    transition: 'transform 0.5s ease, box-shadow 0.5s ease', // Smooth transitions for transform and shadow
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
    borderRadius: '20px' // Rounded corners
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
      <h1 className="my-4">Recipe Detail</h1>
      <div className="card mx-auto" style={{ width: '18rem', overflow: 'hidden', borderRadius: '20px' }}> {/* Added overflow and borderRadius to card */}
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
          <div className="d-flex justify-content-center">
            <Link to={`/updaterecipe/${recipe.id}`} className="btn btn-primary mx-2">
              Edit
            </Link>
            <button onClick={handleDelete} className="btn btn-danger mx-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
