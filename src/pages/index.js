import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="The Coleman School of Dance"
          meta={[
            {
              name: 'description',
              content:
                'A Dance School in New Rochelle, New York instilling a love of dance and encouraging creativity in the community',
            },
            {
              name: 'keywords',
              content: 'coleman, dance, ballet, modern, kids, school',
            },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Class Schedule</h3>
                <p>Find The Class That's Right For You</p>
              </header>
              <Link to="/schedule" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Coleman Dance Company</h3>
                <p>Join Our Award-Winning Student Company</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Faculty</h3>
                <p>Meet The Teachers</p>
              </header>
              <Link to="/faculty" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Tuition and Policy</h3>
                <p>Get the Rules</p>
              </header>
              <Link to="/tuition" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Summer Dance</h3>
                <p>Keep Dancing All Summer!</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Testimonials</h3>
                <p>See What Our Students Say About Us</p>
              </header>
              <Link to="/testimonials" className="link primary"></Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Mission Statement</h2>
              </header>
              <p>
                The Coleman School of Dance instills a love of dance while
                developing artistry and character growth. Students work on their
                technique and enhance their skills in creative expression,
                choreograpy, improvisation, and the vocabulary of movement. We
                ensure individualized attention through small class sizes and
                personal coaching. The Coleman School of Dance imparts the
                essential elements of great dance: teamwork and the individual
                pursuit of excellence. The teachers foster self-confidence in a
                free and caring environment. The Coleman School of Dance offers
                classes classical ballet for kids and teens, modern dance,
                creative movement for small children, introductory hip-hop
                classes, choreography, stage production, and set design. The
                teachers at Coleman School of Dance have an extensive knowledge
                of the art of dance. Learn more by exploring the site.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
