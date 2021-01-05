import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import christie from '../assets/images/christie.jpg'
import jenny from '../assets/images/jenny.jpg'
import etrita from '../assets/images/etrita.jpg'
import kaya from '../assets/images/kaya.jpg'
import mandy from '../assets/images/mandy.jpg'
import melissa from '../assets/images/melissa.jpg'
import nicole from '../assets/images/nicole.jpg'
import sophia from '../assets/images/sophia.jpg'
import susanna from '../assets/images/susanna.jpg'

const Faculty = props => (
  <Layout>
    <Helmet>
      <title>The Coleman School of Dance</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding header="Faculty" subheader="Meet The Teachers" />

    <div id="main">
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={christie} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Christina Coleman</h3>
                <h4>Director, Teacher</h4>
              </header>
              <p>
                <b>Christie Coleman</b> is a dancer and choreographer with a
                Masters in Education for Dance from NYU. Her choreography,
                highlighting social issues through dance, has been performed
                internationally and is acclaimed by UNESCO. She has worked with
                National Ballet of Kosovo premiering two evening-length works.
                Christie was raised within The Coleman School of Dance and
                founded Illuminations Dance Company. In addition to the Coleman
                School of Dance, Christie taught dance at Achievement First
                Charter School in East New York, New Rochelle High School, and
                Sacred Heart University.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={jenny} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Jenny Coleman</h3>
                <h4>Former Director, Teacher</h4>
              </header>
              <p>
                <b>Jenny Coleman</b> entered the dance world at the age of four
                in her mother's studio. As a teenager, she received a
                scholarship to study at The Governor's School of the arts in PA.
                Jenny received a Master's in Dance/Movement Therapy from
                Hahnemann Medical (now Drexel University). After working as a
                dance therapist and having children, she returned to her true
                professional love: teaching dance, which has enthralled her for
                the last 30 years. While teaching, Jenny danced in Connecticut
                Ballet Theatre's productions of The Nutcracker and in Classics
                Dance Theatre's productions of Little Women, Cinderella, and
                Anne Frank.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={etrita} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Etrita Abdullahu</h3>
                <h4>Teacher</h4>
              </header>
              <p>
                <b>Etrita Abdullahu</b> trained at “Prenk Jakova” Music High
                School as a ballet major, and performed with the National Ballet
                of Kosovo where she had the opportunity to work with
                international choreographers and travel with the company. She
                won the Grand Prix Award at The Arts Festival in Dubai. At Fini
                Dance Festival she won a scholarship to come to New York. Here,
                she danced with Michael Mao Company. She trained in the American
                Ballet Theater (ABT) collegiate summer intensive and the Joffrey
                Ballet School. She is now on her third year as a trainee with
                Joffrey. Her love for dance keeps her dancing and passing this
                passion to the younger generation.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={kaya} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Kaya Blumenthal-Rothchild</h3>
                <h4>Teacher</h4>
              </header>
              <p>
                <b>Kaya Blumenthal-Rothchild</b> graduated from Connecticut College in May 2020, and was a major in Dance, and minored in Gender, Sexuality and Intersectionality Studies in addition to completing a certificate program in Community Action and Public Policy. During her four years at Connecticut College, she performed in multiple faculty performances and was in guest artist piece’s including works by Cunningham and Kate Weare. Kaya loves to combine all of the different movement forms she has explored into her dance classes and highlights physicality, fluidity, and improvisation within her choreography. She is incredibly excited to join the Coleman School of Dance faculty for her first year and is thankful for the opportunity to further her movement practice through teaching.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={nicole} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Nicole Cruz</h3>
                <h4>Pointe Teacher</h4>
              </header>
              <p>
                <b>Nicole Cruz</b> was born in the Philippines. She pursued
                dance professionally with Ballet Philippines where she danced
                both principal and soloist roles. Nicole has also danced with
                Hong Kong Ballet and upon moving to the United States, danced
                with Connecticut Ballet, Zig Zog Ballet, Ballet New York and
                Ballet Memphis, where she spent three seasons dancing roles in
                Romeo and Juliet, Cinderella, Sleeping Beauty and Coppelia.
                Currently, Nicole teaches pilates at the Center For Movement in
                Scarsdale, Fiore Pilates in Mamaroneck and Pilates Symmetry in
                Stamford, CT. She also belongs to the faculty of Ballet Center
                in Stamford.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={mandy} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Mandy Kirschner Salva</h3>
                <h4>Teacher</h4>
              </header>
              <p>
                <b>Mandy Kirschner Salva</b> was born and raised in Maryland. She started dancing at a young age and graduated from the Baltimore School for the Arts in 1995. She continued on to SUNY Purchase where she graduated cum laude and received a BFA in dance performance. In 2000 she joined the Merce Cunningham Dance Company where she performed and traveled the world for four years. She has worked with Ellen Cornfield and Liz Gerring, and was a member of the Stephen Petronio Company from 2006 through 2010. She is a founding member of Second Story Dance Project in Westchester, NY where she also lives with her husband and 2 children.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={melissa} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Melissa Gingold</h3>
                <h4>Teacher</h4>
              </header>
              <p>
                <b>Melissa Gingold</b> grew up in New Rochelle. She began ballet classes at age 11 at the Westchester Theatre of Dance at the JCC in Mid-Westchester, where in 2012 she received the Maria Jones Scholarship Award for excellence and promise in the field of dance. In the PAVE program at New Rochelle High School, she studied and performed many styles including hip-hop, contemporary and modern dance. She received instruction at Central Pennsylvania Youth Ballet’s summer intensive program in 2015. Melissa graduated from Cornell University with a degree in Nutritional Sciences and a dietetics concentration. At Cornell, she performed and choreographed lyrical and contemporary pieces with a talented group of students in Pandora Dance Troupe. Up to 500 audience members attended their shows in large performance halls on campus. Melissa currently works as a registered dietitian, and continues to dance around Westchester and NYC. She is honored and excited to guest-teach at the Coleman School of Dance!
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={sophia} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Sophia Procario-Foley</h3>
                <h4>Teacher, Alumna</h4>
              </header>
              <p>
                <b>Sophia Procario-Foley</b> received her dance training from
                the Coleman School of Dance studying modern, ballet, pointe and
                choreography. She elected to continue her training at a
                collegiate level with the SUNY Brockport Department of Dance.
                While Sophia was a part of the Coleman teen dance company she
                choreographed for multiple dance festivals including "Artists
                for World Peace, Dance for Peace". Sophia incorporates dance
                fitness into her teaching as she believes it is important to
                train well-rounded dancers. She will receive her Bachelor of
                Science in spring 2020 and hopes to continue her education to
                become a physical therapist.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={susanna} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Susanna Procario-Foley</h3>
                <h4>Teacher, Alumna</h4>
              </header>
              <p>
                <b>Susanna Procario-Foley</b> danced with the Coleman School of
                Dance for 13 years, where she studied ballet, modern,
                contemporary, improvisation, and choreography. She now attends
                Connecticut College where she double majors in dance and
                English. In 2019, Susanna taught at CSD’s summer camp,
                choreographing and producing performances for the kids. She
                loves teaching because it allows her to spread her passion for
                creativity to younger dancers and watch them grow as artists and
                people. Susanna believes that dance is a powerful means of
                expression and should not be undervalued.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Faculty
