import React from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // go back to home after deletion
  };

  return (
    <button
      onClick={handleDelete}
      style={{ padding: '5px 10px', backgroundColor: 'red', color: 'white' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
