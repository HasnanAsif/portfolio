import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">{"< about me />"} </span>
                      <h2 className="colorlib-heading">Who Is Hasnan?</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum modi quis, ad dolores eos adipisci? Nisi
                        pariatur facere ducimus iusto quia veniam ipsum
                        praesentium! Quos ab voluptate debitis possimus quaerat
                        animi ea. Omnis impedit aperiam minima mollitia
                        corporis, nesciunt natus!
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias eum assumenda, quos impedit, a atque
                        necessitatibus eaque, optio deserunt nemo autem! Beatae
                        ipsam dolor culpa nostrum mollitia quae iste corporis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I Do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Critical Thinking and Decision-Making </h3>
                    <p>
                      With a keen eye for detail and a systematic approach, I excel in analyzing complex problems and making strategic decisions to drive positive outcomes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Problem-Solving and Troubleshooting</h3>
                    <p>
                      Leveraging my strong problem-solving skills, I tackle challenges head-on and thrive in resolving technical issues efficiently to ensure smooth operations and enhance system performance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Continuous Learning and Adaptability</h3>
                    <p>
                     My dedication to perpetual learning enables me to swiftly adapt to new challenges, embracing change as a catalyst for innovation and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
