import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>The Coleman School of Dance</h1>
      </header>
      <div className="content">
        <p>
          “Virtual dance helps dancers stay connected with each other, and lifts
          their spirits during these hard times. It keeps everyone moving and
          gives us something to look forward to.”
          <br />
          -Alison, student in Advanced Ballet, Contemporary, Pointe and Junior
          Company Class
        </p>
        <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
