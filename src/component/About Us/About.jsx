import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">About Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 rounded">
            <div className="card-body">
              <h4 className="card-title text-center">
                Welcome to Vartaman Time
              </h4>
              <p className="card-text">
                At Vartaman Time, we are committed to bringing you the latest
                and most reliable news updates from around the world. Our
                mission is to provide timely and accurate news coverage on a
                wide range of topics including politics, technology,
                entertainment, sports, and more.
              </p>
              <p className="card-text">
                Founded with the vision of becoming a trusted source of
                information, Vartaman Time strives to offer well-researched and
                unbiased reporting. Our team of dedicated journalists and
                editors work around the clock to ensure that you stay informed
                and up-to-date with the most relevant news.
              </p>
              <p className="card-text">
                Our goal is to foster an informed and engaged community by
                delivering news that matters. We believe in the power of
                journalism to drive positive change and hold those in power
                accountable.
              </p>
              <p className="card-text">
                Thank you for choosing Vartaman Time as your news source. We are
                committed to providing you with the best news experience
                possible and look forward to serving you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
