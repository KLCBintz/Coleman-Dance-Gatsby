import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Landing - Forty by HTML5 UP</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Coleman Dance Company</h2>
          </header>
          <p>
            The Coleman Dance Company is an award-winning student company that
            has performed all over the east coast including Lincoln Center
            (NYC), Lyndon Institute (VT) The Palace (CT), and is one of the few
            companies invited to be part of the Artists For World Peace at the
            Katherine Hepburn Cultural Arts Center. The dancers are also
            acclaimed by the International Dance Council (IDC) and UNESCO.
            <br />
            <br />
            Our company classes build rapport and support among a team of
            collaborative and talented dancers. In each Coleman Company, dancers
            take three classes a week, participate in multiple performances per
            year, experience guest teachers who are experts in their fields,
            participate in special events, and see student choreography
            performed. When they are old enough/ready, they become mentors to a
            designated younger dancer. Working as a team, the dancers depend on
            each other for success, feed one another's inspirations and
            intellect, and build long-lasting friendships.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Transitional Justice</h3>
              </header>
              <p>
                Christina Coleman's dance piece, <i>Transitional Justice,</i> is
                inspired by real people and events in communities around the
                world including Columbia, Guatemala, Liberia, Sierra Leone,
                Somalia, South Africa, West Africa, and the Balkans. The
                performance takes the audience on a journey through several
                different peoples' lives: Illuminating their intricate
                relationships, betrayals, traumas, fears, desires, moments of
                empowerment, and finally, forgiveness. The Coleman Teen Dance
                company's performance of <i>Transitional Justice</i> won awards
                for "Originality in Choreography" and "Excellence in Intent" at
                the Vermont State Dance Festival in 2016. In 2017, by
                invitation, the Coleman Company performed an excerpt of the
                piece at Lincoln Center.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>For Malala</h3>
              </header>
              <p>
                Dancers in The Coleman Teen Dance Company fought to make a
                difference with their piece <i>For Malala</i> choreographed by
                student, Sophia Procario-Foley and director, Christina Coleman
                It won awards for "Originality in Choreography" and "Excellence
                in Intent" at The Vermont State Dance Festival, and was one of
                few pieces to be invited to Artists For World Peace at the
                Katherine Hepburn Cultural Arts Center in Connecticut. The
                Coleman School of Dance hosted a dance benefit raising over
                $2,000 for the Malala Foundation.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Memoirs in Greece</h3>
              </header>
              <p>
                <i>Memoirs</i> is about family memory and the ways our heritage
                inherently guides our lives. It features two composers including
                the premiere of Garry Novikoff's original piano piece, Snow
                Falling For Karen. Select students were given the opportunity to
                perform in Europe when The International Dance Council,
                Acclaimed by UNESCO, invited The Coleman School of Dance to
                debut <i>Memoirs</i> at the 2018 Anapale Dance Festival in
                Athens, Greece.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing
