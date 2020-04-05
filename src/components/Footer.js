import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.facebook.com/ColemanSchoolOfDance/"
            className="icon alt fa-facebook"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/thecolemanschoolofdance/"
            className="icon alt fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; 2020 Coleman School of Dance. All Rights Reserved.</li>
        <li>
          A <a href="https://swirlwebdesign.com">Swirl Creative Web Design</a>{' '}
          Project
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
