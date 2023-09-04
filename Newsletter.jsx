import React from 'react';
import '../../styles/Newsletter.css'

function Newsletter() {
  return (
    <section className="newsletter">
        <div className="container">
            <div className="newsletter__wrapper">
                <div className="newsletter__content">
                    <h6 className="subtitle">Let's work</h6>
                    <h2>Explore the <span className="highlight">hidden</span>  ideas and subscribe</h2>
                </div>

                <div className="newsletter__form">
                    <input type="email" placeholder='Email' className="email" />
                    <button className="secondary__btn">Subscribe Now!!</button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Newsletter;
