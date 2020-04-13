import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic12 from '../assets/images/pic12.jpg'
import pic13 from '../assets/images/pic13.jpg'
import pic14 from '../assets/images/pic14.jpg'

const Tuition = props => (
  <Layout>
    <Helmet>
      <title>The Coleman School of Dance</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding header="Tuition and Policy" />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>
              2019-2020 Coleman School of Dance Start Date: Monday, September
              9th
            </h2>
            <h3>
              Our annual tuition is paid by quarter OR by semester for a 5
              percent discount
            </h3>
            <h3>
              If you have two children enrolled, we offer a discount on your
              second child's tuition.
            </h3>
          </header>
          <p>
            One class per week = $620 per year (Four payments of $155.00 or two
            payments of $300.00)
            <br />
            Two classes per week = $1,110.00 per year (Four payments of $275.00
            or two payments of $540.00)
            <br />
            Cost of Extra Individual Classes = $20.00 per class
          </p>
          <p>
            September 21: First quarter payment due, first semester payment due
            <br />
            November 1: second quarter payment due
            <br />
            Feb 1: Third quarter payment due, second semester payment due
            <br />
            April 1: Fourth quarter payment due
          </p>
          <p>
            We accept credit card payments through Paypal, a secure online
            system.
            <br />
            If paying by check, please make checks payable to Christina Coleman.
          </p>
          <p>
            <b>Tuition is non-refundable</b>
            <br />
            Students are allowed one make-up class per quarter in case they have
            to miss.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic13} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Fees</h3>
              </header>
              <p>
                Recital Fee (To cover theatre costs): $40.00 per Student
                <br />
                <br />
                Returned check fee: $25.00
                <br />
                <br />
                Late payment fee: $25.00
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic14} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Supplies</h3>
              </header>
              <dl>
                <dt>Ballet:</dt>
                <dd>Age 3-8: Leotard, tights, pink ballet slippers</dd>
                <dd>
                  Ages 8 and up: Leotard, tights, split-sole ballet slippers
                </dd>
              </dl>
              <dl>
                <dt>Modern Dance:</dt>
                <dd>
                  Black leotard, black shorts, black convertible tights, pink
                  convertible tights
                </dd>
              </dl>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic12} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Studio Policy</h3>
              </header>
              <dl>
                <dt>Tardiness:</dt>
                <dd>
                  In order for everyone to get the most out of their class, we
                  will be starting on time. Arriving after your class has
                  started is disruptive to the teacher and the other students.
                </dd>
                <br />
                <dt>Dress Code:</dt>
                <dd>
                  Students are expected to come to class in proper attire and
                  footwear. Hair must be up, out of the face.
                </dd>
              </dl>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Tuition
