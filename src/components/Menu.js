import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/schedule">
            Schedule
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/landing">
            Company
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/faculty">
            Faculty
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/testimonials">
            Testimonials
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/tuition">
            Tuition and Policy
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/tuition">
            Summer Dance
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a href="tel:9145003381" className="button special fit">
            Call Now
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
