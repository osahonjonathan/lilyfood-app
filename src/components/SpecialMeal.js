import React from "react";
import SpecialMealWrapper from "../wrappers/SpecialMealWrapper";
import { Meals } from "../components";

const SpecialMeal = () => {
  return (
    <SpecialMealWrapper>
      <section className="section-center">
        <div className="meal-head">
          <h3>Special Meals of the day!</h3>
          <p>
            checkout our specials of the day and get discounts on all our meals
            and swift delivery to whatever location within Lagos.
          </p>
        </div>
        <Meals />
      </section>
    </SpecialMealWrapper>
  );
};

export default SpecialMeal;
