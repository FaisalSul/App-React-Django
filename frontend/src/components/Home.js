import React from 'react';

const Home = () => {
  // Styles for the image container
  const containerStyle = {
    textAlign: 'center',
    marginTop: '40px', // Adjusted for better spacing
    fontFamily: 'Arial, sans-serif', // Ensuring text is styled consistently
  };

  // Styles for the image
  const imageStyle = {
    maxWidth: '400px',
    borderRadius: '20px', // Rounded borders
    transition: 'transform 0.5s ease, box-shadow 0.5s ease', // Smooth transitions for transform and shadow
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
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
    <div className="container text-center mt-5" style={containerStyle}>
      <h1 className="mb-4">Welcome to My Recipe App</h1>
      <img
        src="/img.avif"
        alt="Recipe App Logo"
        className="img-fluid"
        style={imageStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <p className="lead" style={{ fontSize: '1.2rem', color: '#555' }}>
        Discover delicious recipes and share your favorites with the community.
      </p>
    </div>
  );
};

export default Home;
