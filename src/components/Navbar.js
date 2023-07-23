// rfc
import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

export default function Navbar(props) {
    return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="/About">{props.aboutText}</a>
         </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-danger" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      </div>
    </div>
  </nav>
    )
}

// these both things are neccessary to provide errors in the situation they are being used

// to restrict types of props
Navbar.propTypes={title:PropTypes.string,
                    aboutText: PropTypes.string,
}

// giving default values to props
// avoiding "undefined"
Navbar.defaultProps={
    title: "set title here",
    aboutText: "About"
}