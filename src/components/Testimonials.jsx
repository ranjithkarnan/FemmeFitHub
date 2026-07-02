import React from 'react';
import { Star } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { googleReviews } from '../data/testimonials.js';

const trustStats = ['5 Rating', '80+ Reviews', '200+ Active Members', '99% Satisfaction'];

function Testimonials() {
  return (
    <section className="section google-reviews-section">
      <div className="container">
        <div className="section-header centered">
          <span className="section-kicker">Google Reviews</span>
          <h2>Loved by Women Across Valasaravakkam</h2>
          <p>
            See why Femme Fit Hub is rated 5 stars by women looking for a ladies gym in Valasaravakkam
            with supportive trainers, clean facilities, modern equipment, and personalized fitness guidance.
          </p>
        </div>

        <div className="google-rating-summary" aria-label="Google review rating summary">
          <div className="google-rating-score">
            <FcGoogle size={28} />
            <strong>5★</strong>
          </div>

          <div>
            <div className="stars" role="img" aria-label="5 out of 5 star rating">
              {[...Array(5)].map((_, starIndex) => (
                <Star fill="currentColor" size={16} key={starIndex} aria-hidden="true" />
              ))}
            </div>
            <span>Based on 80+ Google Reviews</span>
          </div>
        </div>

        <div className="google-reviews-marquee" aria-label="Google reviews carousel">
          <div className="google-reviews-track">
            {[...googleReviews, ...googleReviews].map((review, index) => (
              <article className="google-review-card" key={`${review.name}-${index}`}>
                <div className="review-card-top">
                  <div className="review-avatar" aria-hidden="true">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{review.name}</h3>
                    <span>{review.time}</span>
                  </div>
                </div>

                <div className="review-stars" role="img" aria-label={`${review.rating} out of 5 star rating`}>
                  {[...Array(review.rating)].map((_, starIndex) => (
                    <Star fill="currentColor" size={16} key={starIndex} aria-hidden="true" />
                  ))}
                </div>

                <p>{review.text}</p>
                {review.text.length > 150 ? (
                  <button className="review-read-more" type="button">
                    Read More
                  </button>
                ) : null}

                <div className="google-review-footer">
                  <div className="google-review-badge">
                    <FcGoogle size={20} />
                    <span>Verified Review</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="google-review-action"><a className="btn btn-primary" href="https://www.google.com/search?q=Femme+FitHub+Ladies+Gym+reviews" target="_blank" rel="noreferrer">See All Reviews on Google</a></div>

        <div className="google-trust-pills" aria-label="Femme Fit Hub review highlights">
          {trustStats.map((stat) => (
            <span key={stat}>
              <Star fill="currentColor" size={15} aria-hidden="true" />
              {stat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
