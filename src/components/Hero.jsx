import React from 'react'
import Stats from './Stats'

const Hero = () => {
  return (
    <div>
         <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">For focused students</p>
            <h1>Build your best study routine.</h1>
            <p className="hero-text">
              A simple place to stay organized, stay motivated, and keep learning
              without the overwhelm.
            </p>

            <div className="hero-actions">
              <button className="primary-button">Start free</button>
              <button className="secondary-button">View demo</button>
            </div>
       <Stats/>

        
          </div>

          <div className="hero-card" aria-label="Study dashboard preview">
            <div className="mini-card top-card">
              <span>Weekly focus</span>
              <strong>85%</strong>
            </div>

            <div className="mini-card chart-card">
              <span>Study hours</span>
              <div className="bars">
                <i className="bar-one" />
                <i className="bar-two" />
                <i className="bar-three" />
                <i className="bar-four" />
                <i className="bar-five" />
              </div>
            </div>

            <div className="mini-card task-card">
              <span>Today</span>
              <ul>
                <li>Read chapter 4</li>
                <li>Finish quiz</li>
              </ul>
            </div>
          </div>
        </section>

    </div>
  )
}

export default Hero