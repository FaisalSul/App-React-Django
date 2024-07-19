import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    description: '',
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setRecipe({
      ...recipe,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', recipe.name);
      formData.append('description', recipe.description);
      formData.append('image', recipe.image);

      await axios.post('http://localhost:8000/api/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      navigate('/ShowRecipes'); 
    } catch (error) {
      console.error('Error adding recipe:', error);
      
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Add Recipe</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name:</label>
                  <input type="text" id="name" name="name" value={recipe.name} onChange={handleChange} className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description:</label>
                  <textarea id="description" name="description" value={recipe.description} onChange={handleChange} className="form-control" rows="4" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Image:</label>
                  <input type="file" id="image" name="image" onChange={handleImageChange} className="form-control" required />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Add Recipe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
