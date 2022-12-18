import React from "react";
import NewsletterWrapper from "../wrappers/NewsletterWrapper";

const Newsletter = () => {
  return (
    <NewsletterWrapper>
      <section className="letter-section">
        <div>
          <h3>Get notified when we update!</h3>
          <p>
            Get notified when we add a new items to our special menu, update our
            price list for promos
          </p>
        </div>
        <form className="form">
          <input type="text" className="input" />
          <button className="btn">Get Notified</button>
        </form>
      </section>
    </NewsletterWrapper>
  );
};

export default Newsletter;
