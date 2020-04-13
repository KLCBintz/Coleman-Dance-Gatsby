import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

const Testimonials = props => (
  <Layout>
    <Helmet>
      <title>The Coleman School of Dance</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding header="Testimonials" />

    <div id="main">
      <section id="one">
        <div className="inner">
          <p>
            "The Coleman School of Dance is awesome! The dance teachers are very
            caring, supportive, and helpful. The Coleman School places a strong
            emphasis on proper technique, as well as encouraging creativity and
            maintaining a healthy attitude towards dance. The teen dance company
            is a great way to explore the more professional side of dance; the
            intensive schedule and participation in shows is a comprehensive
            look into the dance world. In addition, the end of the year show in
            June is always put on beautifully, and it is a lot of fun for
            families and students alike!"
            <br />
            <br />
            --Maddy Lawder, Alumna
          </p>

          <p>
            "Being with the Coleman School of Dance has been one of the most
            life-­‐changing experiences. This year has been so amazing with
            learning professional dance variations, having classes with
            professional dancers, traveling to Vermont, and so such more! Not
            only are you able to develop yourself as a dancer, but you also
            develop other important skills such as communication,
            responsibility, and maturity. In the company, you are able to create
            such great relationships with others and have a greater sense of
            self-­expression through dance. With learning how to express
            ourselves, we also have the ability to control our expressions and
            use it to tell stories regarding serious and powerful topics."
            <br />
            <br />
            --Ariana, age 14
          </p>
          <p>
            "Being in the Coleman School of Dance is one of the things I am most
            thankful for. Expressing thoughts and emotions through dance and
            stretching myself to the best of my ability has been so much fun. I
            look forward to it every week, and it’s one of my favorite things.
            The teachers and students are so kind and helpful, and such great
            dancers. This dance school has taught me so much, and gave me so
            many great memories."
            <br />
            <br />
            --Nola, age 14
          </p>
          <p>
            “The smile that I see on my daughter’s face when she dances is the
            greatest gift a parent could ask for. The pure joy that it brings
            her, the ability to express herself freely, and the intellectual
            manner in which she approaches it are just a few of the benefits
            dance provides her. The ability to continue to connect to these
            things via dance during this time will only help her cope, and
            hopefully bring some beautiful dance to other.
            <br />
            <br />
            --Beth, Parent
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Testimonials
