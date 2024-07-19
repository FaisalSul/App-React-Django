import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateRecipe = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    loadRecipe();
  }, []);

  const loadRecipe = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/${id}/`);
      const { name, description, image } = response.data;
      setName(name);
      setDescription(description);
      setImage(image);
    } catch (error) {
      console.error(`Error fetching recipe with ID ${id}:`, error);
    }
  };

  const updateRecipe = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      if (image && typeof image === 'object') {
        formData.append('image', image);
      }

      await axios.put(`http://localhost:8000/api/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Recipe updated successfully');
      navigate('/ShowRecipes');
    } catch (error) {
      console.error(`Error updating recipe with ID ${id}:`, error.response ? error.response.data : error);
    }
  };

  // Styles for the image
  const imageStyle = {
    maxHeight: '200px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    borderRadius: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  // Function to handle mouse hover events
  const handleMouseOver = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  };

  // Function to handle mouse out events
  const handleMouseOut = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Update Recipe</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Image:</label>
                  <br />
                  {image && (
                    <img
                      src={typeof image === 'object' ? URL.createObjectURL(image) : image}
                      alt="Recipe"
                      className="img-fluid mb-3"
                      style={imageStyle}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    />
                  )}
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter recipe name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Description:</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter recipe description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <button
                  className="btn btn-primary btn-block"
                  onClick={updateRecipe}
                >
                  Update Recipe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRecipe;
