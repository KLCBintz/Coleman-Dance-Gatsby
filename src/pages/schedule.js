import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import { Link } from 'gatsby'

const ScheduleLink = () => (
  <p>
    <Link to="/full-schedule">Learn More</Link>
  </p>
)

const Schedule = props => (
  <Layout>
    <Helmet>
      <title>Schedule</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding
      header="Class Schedule"
      subheader="Find The Class That's Right For You!"
    />

    <div id="MobileSchedule">
      <div class="tablehead">Monday</div>

      <div>
        Modern Dance
        <br />
        Level I
        <br />
        4:45-5:45
        <ScheduleLink />
      </div>

      <div>
        Ballet
        <br />
        Intermediate II
        <br />
        6:00-7:30pm
        <ScheduleLink />
      </div>

      <div>
        Ballet
        <br />
        For Adults
        <br />
        7:30-9pm
        <ScheduleLink />
      </div>

      <div class="tablehead">Tuesday</div>

      <div>
        Creative Movement
        <br />
        Age 3-4
        <br />
        4-4:45pm
        <ScheduleLink />
      </div>

      <div>
        Ballet
        <br />
        Intermediate
        <br />
        4:30-5:30pm
        <ScheduleLink />
      </div>

      <div>
        Modern Dance
        <br />
        Intermediate II
        <br />
        5:45-7:15pm
        <ScheduleLink />
      </div>

      <div>
        Modern Dance
        <br />
        Advanced
        <br />
        7:30-9pm
        <ScheduleLink />
      </div>

      <div class="tablehead">Wednesday</div>

      <div>
        Modern Dance
        <br />
        Intermediate I
        <br />
        4:30-5:30pm
        <ScheduleLink />
      </div>

      <div>
        Tap
        <br />
        Intermediate I
        <br />
        4:30-5:30pm
        <ScheduleLink />
      </div>

      <div>
        Pointe
        <br />
        Strengthening
        <br />
        6:45-7:45pm
        <ScheduleLink />
      </div>

      <div>
        <a href="landing.js">Company Rehearsal</a>
        <br />
        5:45-7:45pm
        <ScheduleLink />
      </div>

      <div class="tablehead">Thursday</div>

      <div>
        Ballet
        <br />
        Level I
        <br />
        4:45-5:45pm
        <ScheduleLink />
      </div>

      <div>
        Ballet/Pointe
        <br />
        Advanced
        <br />
        6-7:30pm
        <ScheduleLink />
      </div>

      <div>
        Fitness Class
        <br />
        For Adults
        <br />
        7:30-8:30pm
        <ScheduleLink />
      </div>

      <div class="tablehead">Friday</div>

      <div>
        Ballet
        <br />
        Intermediate
        <br />
        5-6:30pm
        <ScheduleLink />
      </div>

      <div class="tablehead">Sunday</div>

      <div>
        Dance
        <br />
        For Boys
        <br />
        11am-12pm
        <ScheduleLink />
      </div>

      <div>
        Ballet
        <br />
        For Adult Beginners
        <br />
        12:15-1:15pm
        <ScheduleLink />
      </div>
    </div>

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
        <h5 class="weekday">Tuesday</h5>
        Creative Movement
        <br />
        Ages 3-4
        <br />
        3:30-4:30pm
        <ScheduleLink />
      </div>

      <div>
        <h5 class="weekday">Wednesday</h5>
        Modern Dance
        <br />
        Intermediate
        <br />
        4:30-5:30pm
        <ScheduleLink />
      </div>

      <div>
        <br />
      </div>

      <div>
        <br />
      </div>

      <div>
        <h5 class="weekday">Sunday</h5>
        Dance
        <br />
        For Boys
        <br />
        11am-12pm
        <ScheduleLink />
      </div>

      <div>
        <h5 class="weekday">Monday</h5>
        Modern Dance
        <br />
        Level I
        <br />
        4:45-5:45pm
        <ScheduleLink />
      </div>

      <div>
        <h5 class="weekday">Tuesday</h5>
        Ballet
        <br />
        Intermediate
        <br />
        4:30-5:30pm
        <ScheduleLink />
      </div>

      <div>
        <h5 class="weekday">Wednesday</h5>
        Tap
        <br />
        Intermediate
        <br />
        4:30-5:30pm
        <ScheduleLink />
      </div>

      <div>
        <h5 class="weekday">Thursday</h5>
        Ballet
        <br />
        Beginner
        <br />
        4:45-5:45pm
        <ScheduleLink />
      </div>

      <div>
        <h5 class="weekday">Friday</h5>
        Ballet
        <br />
        Intermediate
        <br />
        5-6:30pm
        <ScheduleLink />
      </div>

      <div>
        <h5 class="weekday">Sunday</h5>
        Ballet
        <br />
        For Adult Beginners
        <br />
        12:15-1:15pm
        <ScheduleLink />
      </div>

      <div>
        <h5 class="weekday">Monday</h5>
        Ballet
        <br />
        Intermediate II
        <br />
        6:00-7:30pm
        <ScheduleLink />
      </div>

      <div>
        <h5 class="weekday">Tuesday</h5>
        Modern Dance
        <br />
        Intermediate II
        <br />
        5:45-7:15pm
        <ScheduleLink />
      </div>

      <div>
        <h5 class="weekday">Wednesday</h5>
        Company Rehearsal
        <br />
        <a href="landing.js">Student Company</a>
        <br />
        5:45-7:45pm
        <ScheduleLink />
      </div>

      <div>
        <h5 class="weekday">Thursday</h5>
        Ballet/Pointe
        <br />
        Advanced
        <br />
        6-7:30pm
        <ScheduleLink />
      </div>

      <div>
        <br />
      </div>

      <div>
        <br />
      </div>

      <div>
        <h5 class="weekday">Monday</h5>
        Ballet
        <br />
        For Adults
        <br />
        7:30-9pm
        <ScheduleLink />
      </div>

      <div>
        <h5 class="weekday">Tuesday</h5>
        Modern Dance
        <br />
        Advanced
        <br />
        7:30-9pm
        <ScheduleLink />
      </div>

      <div>
        <h5 class="weekday">Wednesday</h5>
        Pointe
        <br />
        Strengthening
        <br />
        6:45-7:45pm
        <ScheduleLink />
      </div>

      <div>
        <h5 class="weekday">Thursday</h5>
        Fitness Class
        <br />
        For Adults
        <br />
        7:30-8:30pm
        <ScheduleLink />
      </div>

      <div>
        <br />
      </div>

      <div>
        <br />
      </div>
    </div>
  </Layout>
)

export default Schedule
