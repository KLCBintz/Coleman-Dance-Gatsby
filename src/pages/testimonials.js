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
            --Ariana, Student, Coleman Teen Dance Company
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
            --Nola, Student, Coleman Junior Company
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
          <p>
            “In this time of uncertainty, virtual dance connects us to our
            wonderful community and provides a bit of structure to our day, but
            most importantly allows my daughter a creative outlet to help
            process some of her feelings and emotions.”
            <br />
            <br />
            --Yadira, Parent
          </p>
          <p>
            I think virtual classes are great! They are a really good
            distraction and change of pace! I can improve technique from the
            comfort of my home. Dance is a really good way to de-stress!
            <br />
            <br />
            --Jazmin, Student, Beginning Adult Ballet
          </p>
          <p>
            “The Coleman School of Dance has truly impacted not only its
            students but the New Rochelle community as well. Here at CTDC we are
            offered so many character -shaping opportunities that we otherwise
            would not have been able to experience. I started out as a young
            beginner and over a course of a few years I was moving on to
            performing at various locations such as Lincoln Center and the
            Vermont State Dance Festival. But the Coleman School of Dance is
            more than just a space for creativity and movement. It is a family;
            a platform where endless bonds and connections are made. I enrolled
            at the Coleman School of Dance after moving to New York in 2013 and
            met my first friends in New Rochelle at a ballet class after school
            led by Ms. Jenny. It turned out to be one of the best decisions I
            have ever made. The past seven years here have truly been wonderful
            and I look forward to many more adventures.”
            <br />
            <br />
            --Rebecca, Student, Coleman Teen Dance Company
          </p>
          <p>
            “Being at the Coleman School of Dance is a huge part of my life.
            It’s like my second home. I’ve known everyone here for pretty much
            my entire life and they’ve become my family."
            <br />
            <br />
            --Peyton Student, Coleman Teen Dance Company
          </p>
          <p>
            “To be in one of Christina’s dances it feels like an author reading
            their story to a young class. Every movement is clearly depicted,
            unique and has a reason for being performed."
            <br />
            <br />
            --Sophia Procario-Foley, Alumna
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Testimonials
