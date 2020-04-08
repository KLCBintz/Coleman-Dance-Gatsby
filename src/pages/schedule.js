import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Schedule</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding
      header="Class Schedule"
      subheader="Find The Class That's Right For You!"
    />

    <div id="main">
      <div id="Schedule">
        <div class="tablehead">Monday</div>

        <div class="tablehead">Tuesday</div>

        <div class="tablehead">Wednesday</div>

        <div class="tablehead">Thursday</div>

        <div class="tablehead">Friday</div>

        <div class="tablehead">Sunday</div>

        <div>
          <br />
        </div>

        <div>
          <h2 class="weekday">Tuesday</h2>
          <h3>
            Creative Movement
            <br />
            Age 3-4
            <br />
            3:30-4:30pm
          </h3>
          <p>
            (September 20th-December 6th)
            <br />
            In this class we do the brain dance, play dance games with friends
            to build positive relationships, and develop gross motor skills and
            coordination.
          </p>
        </div>

        <div>
          <h2 class="weekday">Wednesday</h2>
          <h3>
            Modern Dance
            <br />
            Intermediate
            <br />
            4:30-5:30pm
          </h3>
          <p>
            A Blend of{' '}
            <a href="#bottom">
              <u>Horton</u>
            </a>
            , Graham,{' '}
            <a href="#bottom">
              <u>Limon</u>
            </a>
            , Release and contemporary dance styles as well as improvisation and
            partnering. Choreography is based around educational themes and
            storylines.
          </p>
        </div>

        <div>
          <br />
        </div>

        <div>
          <br />
        </div>

        <div>
          <h2 class="weekday">Sunday</h2>
          <h3>
            Dance
            <br />
            For Boys
            <br />
            11am-12pm
          </h3>
          <p>
            We cover several styles within this class as well as improvisation.
            Currently we are focusing on strength building; floor work; and
            transitioning of weight, tossing ourselves around the room and
            rising from the floor in only seconds.
          </p>
        </div>

        <div>
          <h2 class="weekday">Monday</h2>
          <h3>
            Modern Dance
            <br />
            Level I
            <br />
            4:45-5:45pm
          </h3>
          <p>
            A Blend of{' '}
            <a href="bottom">
              <u>Horton</u>
            </a>
            , Graham,{' '}
            <a href="#bottom">
              <u>Limon</u>
            </a>
            , Release and contemporary dance styles as well as improvisation &
            partnering. Choreography is based around educational themes and
            storylines.
          </p>
        </div>

        <div>
          <h2 class="weekday">Tuesday</h2>
          <h3>
            Ballet
            <br />
            Intermediate
            <br />
            4:30-5:30pm
          </h3>
          <p>
            This is a Vaganava ballet class where students study traditional
            ballet technique that is developmentally appropriate for their age:
            learning proper alignment, building strength and sequencing of steps
            in a joyful environment.
          </p>
        </div>

        <div>
          <h2 class="weekday">Wednesday</h2>
          <h3>
            Tap
            <br />
            Intermediate
            <br />
            4:30-5:30pm
          </h3>
          <p>
            This class focuses on musicality, rhythms, dynamics, terminology and
            developing your own style. Each student is recognized for their
            talents and receives as much individualized attention as possible.
          </p>
        </div>

        <div>
          <h2 class="weekday">Thursday</h2>
          <h3>
            Ballet
            <br />
            Level I
            <br />
            4:45-5:45pm
          </h3>
          <p>
            This is a Vaganava style ballet class where students study
            traditional ballet technique that is developmentally appropriate for
            their age: proper alignment, ballet vocabulary and new steps in a
            joyful environment.
          </p>
        </div>

        <div>
          <h2 class="weekday">Friday</h2>
          <h3>
            Ballet
            <br />
            Intermediate
            <br />
            5-6pm
          </h3>
          <p>
            This is a Vaganava ballet class where students study traditional
            ballet technique that is developmentally appropriate for their age:
            learning proper alignment, building strength and sequencing of steps
            in a joyful environment.
          </p>
        </div>

        <div>
          <h2 class="weekday">Sunday</h2>
          <h3>
            Ballet
            <br />
            For Adult Beginners
            <br />
            12:15-1:15pm
          </h3>
          <p>
            Want to try something new? Get exercise while enjoying beautiful
            music in a relaxing environment. We take you through the traditional
            barre exercises and then learn new steps and sequences in center to
            foster a love of movement and a healthy mind/body.
          </p>
        </div>

        <div>
          <div>
            <h3>
              Ballet
              <br />
              Intermediate II
              <br />
              6:00-7:30pm
            </h3>
            <p>
              This is a Vaganava ballet class where students study traditional
              ballet technique. This class prepares dancers to go on pointe.
            </p>
          </div>
        </div>

        <div>
          <h2 class="weekday">Tuesday</h2>
          <h3>
            Modern Dance
            <br />
            Intermediate/Advanced
            <br />
            5:45-7:15pm
          </h3>
          <p>
            Focusing on{' '}
            <a href="#bottom">
              <u>Horton</u>
            </a>{' '}
            and{' '}
            <a href="#bottom">
              <u>Limon</u>
            </a>
            Techniques. This class gives the dancers a strong understanding of
            these codified techniques preparing them for professional programs
            and college programs.
          </p>
        </div>

        <div>
          <h2 class="weekday">Wednesday</h2>
          <h3>
            <a href="landing.js">Company Rehearsal</a>
            <br />
            5:45-7:45pm
          </h3>
          <p>
            For advanced students by invitation or audition only. This is a{' '}
            <a href="landing.js">Coleman Dance Company</a> class for dancers who
            have earned their placement in the company with exemplary
            attendance, character, strength, grace, artistry, and musicality.
          </p>
        </div>

        <div>
          <h2 class="weekday">Thursday</h2>
          <h3>
            Ballet/Pointe
            <br />
            Advanced
            <br />
            6-7:30pm
          </h3>
          <p>
            This is a Vaganava ballet class where students study traditional
            ballet technique. Pointe technique is infused in the classes and
            dancers learn professional variations of the pros.
          </p>
        </div>

        <div>
          <br />
        </div>

        <div>
          <br />
        </div>

        <div>
          <h2 class="weekday">Monday</h2>
          <h3>
            Ballet
            <br />
            For Adults
            <br />
            7:30-9pm
          </h3>
          <p>
            This is an open-level, drop-in class that is engaging and
            challenging; championing artistry, expressions, and a healthy
            lifestyle. Offered for both the beginner, the working professional,
            and all dancers in-between.
          </p>
        </div>

        <div>
          <h2 class="weekday">Tuesday</h2>
          <h3>
            Modern Dance
            <br />
            Advanced
            <br />
            7:30-9
          </h3>
          <p>
            Focusing on{' '}
            <a href="#bottom">
              <u>Horton</u>
            </a>{' '}
            and
            <a href="#bottom">
              <u>Limon</u>
            </a>{' '}
            Techniques. This class gives the dancers a strong understanding of
            these codified techniques preparing them for professional programs
            and college programs.
          </p>
        </div>

        <div>
          <h2 class="weekday">Wednesday</h2>
          <h3>
            Pointe
            <br />
            Strengthening
            <br />
            6:45-7:45pm
          </h3>
          <p>
            (Every Other Wednesday) Dancers learn the fundamentals, proper
            placement and develop strength to be successful pointe dancers. They
            go through traditional pointe exercises at the barre and across the
            floor.
          </p>
        </div>

        <div>
          <h2 class="weekday">Thursday</h2>
          <h3>
            Fitness Class
            <br />
            For Adults
            <br />
            7:30-8:30pm
          </h3>
          <p>
            This is a pilates and yoga-based exercise, strengthen, and stretch
            class. People have reported that with this exercise class they have
            higher energy levels, greater flexibility, and feel better about
            themselves and their bodies.
          </p>
        </div>

        <div>
          <br />
        </div>

        <div>
          <br />
        </div>
      </div>
    </div>

    <div id="main">
      <div id="MobileSchedule">
        <div class="tablehead">Monday</div>

        <div>
          <h3>
            Modern Dance
            <br />
            Level I
            <br />
            4:45-5:45pm
          </h3>
          <p>
            A Blend of{' '}
            <a href="#bottom">
              <u>Horton</u>
            </a>
            , Graham,{' '}
            <a href="#bottom">
              <u>Limon</u>
            </a>
            , Release and contemporary dance styles as well as improvisation and
            partnering. Choreography is based around educational themes and
            storylines.
          </p>
        </div>

        <div>
          <h3>
            Ballet
            <br />
            Intermediate/Advanced
            <br />
            6:00-7:30pm
          </h3>
          <p>
            This is a Vaganava ballet class where students study traditional
            ballet technique. This class prepares dancers to go on pointe.
          </p>
        </div>

        <div>
          <h3>
            Ballet
            <br />
            For Adults
            <br />
            7:30-9pm
          </h3>
          <p>
            This is an open-level, drop-in class that is engaging and
            challenging; championing artistry, expressions, and a healthy
            lifestyle. Offered for both the beginner, the working professional,
            and all dancers in-between.
          </p>
        </div>

        <div class="tablehead">Tuesday</div>

        <div>
          <h3>
            Creative Movement
            <br />
            Age 3-4
            <br />
            4-4:45pm
          </h3>
          <p>
            In this class we do the brain dance, play dance games with friends
            to build positive relationships, and develop gross motor skills and
            coordination.
          </p>
        </div>

        <div>
          <h3>
            Ballet
            <br />
            Intermediate
            <br />
            4:30-5:30pm
          </h3>
          <p>
            This is a Vaganava ballet class where students study traditional
            ballet technique that is developmentally appropriate for their age:
            learning proper alignment, building strength and sequencing of steps
            in a joyful environment.
          </p>
        </div>

        <div>
          <h3>
            Modern Dance
            <br />
            Intermediate/Advanced
            <br />
            5:45-7:15pm
          </h3>
          <p>
            Focusing on{' '}
            <a href="#bottom">
              <u>Horton</u>
            </a>{' '}
            and
            <a href="#bottom">
              <u>Limon</u>
            </a>
            Techniques. This class gives the dancers a strong understanding of
            these codified techniques preparing them for professional programs
            and college programs.
          </p>
        </div>

        <div>
          <h3>
            Modern Dance
            <br />
            Advanced
            <br />
            7:30-9pm
          </h3>
          <p>
            Focusing on{' '}
            <a href="#bottom">
              <u>Horton</u>
            </a>{' '}
            and
            <a href="#bottom">
              <u>Limon</u>
            </a>
            Techniques. This class gives the dancers a strong understanding of
            these codified techniques preparing them for professional programs
            and college programs.
          </p>
        </div>

        <div class="tablehead">Wednesday</div>

        <div>
          <h3>
            Modern Dance
            <br />
            Intermediate
            <br />
            4:30-5:30pm
          </h3>
          <p>
            A Blend of{' '}
            <a href="#bottom">
              <u>Horton</u>
            </a>
            , Graham,{' '}
            <a href="#bottom">
              <u>Limon</u>
            </a>
            , Release and contemporary dance styles as well as improvisation and
            partnering. Choreography is based around educational themes and
            storylines.
          </p>
        </div>

        <div>
          <h3>
            Tap
            <br />
            Intermediate
            <br />
            4:30-5:30pm
          </h3>
          <p>
            This class focuses on musicality, rhythms, dynamics, terminology and
            developing your own style. Each student is recognized for their
            talents and receives as much individualized attention as possible.
          </p>
        </div>

        <div>
          <h3>
            Pointe
            <br />
            Strengthening
            <br />
            6:45-7:45pm
          </h3>
          <p>
            (Every Other Wednesday) Dancers learn the fundamentals, proper
            placement and develop strength to be successful pointe dancers. They
            go through traditional pointe exercises at the barre and across the
            floor.
          </p>
        </div>

        <div>
          <h3>
            <a href="ctdc.html">Company Rehearsal</a>
            <br />
            5:45-7:45pm
          </h3>
          <p>
            For advanced students by invitation or audition only. This is a{' '}
            <a href="ctdc.html">Coleman Dance Company</a> class for dancers who
            have earned their placement in the company with exemplary
            attendance, character, strength, grace, artistry, and musicality.
          </p>
        </div>

        <div class="tablehead">Thursday</div>

        <div>
          <h3>
            Ballet
            <br />
            Level I
            <br />
            4:45-5:45pm
          </h3>
          <p>
            This is a Vaganava style ballet class where students study
            traditional ballet technique that is developmentally appropriate for
            their age: proper alignment, ballet vocabulary and new steps in a
            joyful environment.
          </p>
        </div>

        <div>
          <h3>
            Ballet/Pointe
            <br />
            Advanced
            <br />
            6-7:30pm
          </h3>
          <p>
            This is a Vaganava ballet class where students study traditional
            ballet technique. Pointe technique is infused in the classes and
            dancers learn professional variations of the pros.
          </p>
        </div>

        <div>
          <h3>
            Fitness Class
            <br />
            For Adults
            <br />
            7:30-8:30pm
          </h3>
          <p>
            This is a pilates and yoga-based exercise, strengthen, and stretch
            class. People have reported that with this exercise class they have
            higher energy levels, greater flexibility, and feel better about
            themselves and their bodies.
          </p>
        </div>

        <div class="tablehead">Friday</div>

        <div>
          <h3>
            Ballet
            <br />
            Intermediate
            <br />
            5-6:30pm
          </h3>
          <p>
            This is a Vaganava ballet class where students study traditional
            ballet technique that is developmentally appropriate for their age:
            learning proper alignment, building strength and sequencing of steps
            in a joyful environment.
          </p>
        </div>

        <div class="tablehead">Sunday</div>

        <div>
          <h3>
            Dance
            <br />
            For Boys
            <br />
            11am-12pm
          </h3>
          <p>
            We cover several styles within this class as well as improvisation.
            Currently we are focusing on strength building; floor work; and
            transitioning of weight, tossing ourselves around the room and
            rising from the floor in only seconds.
          </p>
        </div>

        <div>
          <h3>
            Ballet
            <br />
            For Adult Beginners
            <br />
            12:15-1:15pm
          </h3>
          <p>
            Want to try something new? Get exercise while enjoying beautiful
            music in a relaxing environment. We take you through the traditional
            barre exercises and then learn new steps and sequences in center to
            foster a love of movement and a healthy mind/body.
          </p>
        </div>
      </div>
      <div id="bottom">
        <h3>Horton</h3>
        <p>
          In Horton technique, dancers work on flat backs, lateral stretches,
          release swings, leg swings, deep lunges, T position giving them
          freedom to move from one place to another in ways the dancer didn't
          know was possible.{' '}
        </p>

        <h3>Limon</h3>
        <p>
          In Limon Dance, movement is guided by breath through the body, the
          dynamic use of weight in each body part and the fluid succession of
          one movement into the next.
        </p>
      </div>
    </div>
  </Layout>
)

export default Landing
