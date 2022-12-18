import React from "react";
import mealShowcase from "../utils/mealShowcase";
import MealsWrapper from "../wrappers/MealsWrapper";

const Meals = () => {
  return (
    <MealsWrapper>
      <section className="meals">
        {mealShowcase.map((meal) => {
          const { id, image, title, text } = meal;
          return (
            <article className="single-meal" key={id}>
              <div className="meal-image-container">
                <img src={image} alt="" className="meal-image" />
              </div>
              <div className="meal-text">
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </article>
          );
        })}
      </section>
    </MealsWrapper>
  );
};

export default Meals;
