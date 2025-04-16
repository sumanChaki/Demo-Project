import React from 'react'
import { useParams } from 'react-router-dom'

function RecipesDetails() {
    const {recipeId} = useParams()
    
  return <div>RecipesDetails: {recipeId}</div>;
}

export default RecipesDetails