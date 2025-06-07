import { useState } from 'react';
import styles from './detailedcard.module.css';

function DetailedCard({ recipe }) {
  const [activeTab, setActiveTab] = useState('ingredients');

  if (!recipe) return <div className={styles.loading}>Loading recipe details...</div>;

  return (
    <div className={styles.detailContainer}>
      <div className={styles.header}>
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className={styles.recipeImage} 
        />
        
        <div className={styles.headerInfo}>
          <h1>{recipe.name}</h1>
          
          <div className={styles.meta}>
            <span className={styles.difficulty} style={{
              color: recipe.difficulty === "Easy" ? "green" : 
                     recipe.difficulty === "Medium" ? "#FEBE10" : "red"
            }}>
              {recipe.difficulty}
            </span>
            
            <span className={styles.rating}>
              {recipe.rating} ★
            </span>
            
            <span className={styles.time}>
              {recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins
            </span>
          </div>
          
          <div className={styles.tags}>
            {recipe.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.tabs}>
        <button 
          className={activeTab === 'ingredients' ? styles.activeTab : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </button>
        <button 
          className={activeTab === 'instructions' ? styles.activeTab : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'ingredients' ? (
          <div className={styles.ingredients}>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <div className={styles.servingInfo}>
              <span>Serving Size: {recipe.servings}</span>
              <span>Calories: {recipe.caloriesPerServing} kcal</span>
            </div>
          </div>
        ) : (
          <div className={styles.instructions}>
            <h3>Instructions</h3>
            <ol>
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailedCard;