import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic15 from '../assets/images/pic15.jpg'
import pic16 from '../assets/images/pic16.jpg'

const Summer = props => (
  <Layout>
    <Helmet>
      <title>The Coleman School of Dance</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding
      header="Summer Dance"
      subheader="Serious Dance Meets Summer Fun!"
    />

    <section id="two" className="spotlights">
      <section>
        <Link to="/generic" className="image">
          <img src={pic15} alt="" />
        </Link>
        <div className="content">
          <div className="inner">
            <p>
              Mon-Fri 10am - 2pm
              <br />
              Weekly Studio Performance Every Friday At 2:30pm
            </p>
            <ul>
              <li>June 29th-July 3rd</li>
              <li>July 6th-July 10th</li>
              <li>July 13th-July 17th</li>
              <li>July 20th-July 24th</li>
              <li>July 27th-July 31st</li>
            </ul>
            <p>
              Price: $300 per week ($15/hour, includes lunch)
              <br />
              Sign up for four weeks and get the 5th week 50% off!
            </p>
          </div>
        </div>
      </section>
      <section>
        <Link to="/generic" className="image">
          <img src={pic16} alt="" />
        </Link>
        <div className="content">
          <div className="inner"></div>
          <p>
            <b>
              Summer Dance is a chance to learn, play, create and grow with your
              friends.
              <br />
              Each week we produce a studio performance for friends and family
              to enjoy.
            </b>
            <br />
            <br />
            <b>Improve Your Dance Skills:</b> Get individualized attention daily
            <br />
            <br />
            <b>Get Artistic:</b> Draw, paint, craft and more
            <br />
            <br />
            <b>Build Community:</b> Bond with your fellow dancers
            <br />
            <br />
            <b>Perform:</b>Experience and help produce weekly performances
          </p>
        </div>
      </section>
    </section>

    <div id="main">
      <section id="one">
        <div className="inner">
          <p>
            "Sunshine, movement, friendship, creativity, expression and support
            are some of the many words that come to mind as I reflect on the 10+
            summers I spent at the Coleman Summer Dance Camp. As a young dancer,
            the summer camp provided me with incredible opportunities to not
            only build my skills as a mover, but to learn how to create new
            stories through movement and teach them to my friends. As an older
            dancer, the summer camp provided me with leadership and mentorship
            opportunities I continue to cherish. Christie (and the entire
            Coleman family) and her staff always created a warm, supportive, and
            fun environment that let all of us thrive! Over those summers, my
            self confidence, my dancing ability, and my friendships all grew and
            I continue to think back on those moments very fondly nearly a
            decade later."
            <br />
            --Alex Williams, Alumna
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Summer
