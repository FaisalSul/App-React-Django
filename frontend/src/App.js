import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarN from './components/NavBarN';
import ShowRecipes from './components/ShowRecipes';
import AddRecipe from './components/AddRecipe';
import RecipeDetail from './components/RecipeDetail';
import UpdateRecipe from './components/UpdateRecipe';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarN />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ShowRecipes' element={<ShowRecipes />} />
          <Route path='/addrecipe' element={<AddRecipe />} />
          <Route path='/recipedetail/:id' element={<RecipeDetail />} />
          <Route path='/updaterecipe/:id' element={<UpdateRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
