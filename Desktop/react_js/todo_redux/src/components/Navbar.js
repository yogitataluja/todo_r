import React from 'react'
import { NavLink } from 'react-router-dom'
import { fire } from '../auth/FirebaseAuth'
const Navbar = ({ user }) => {
  return (<>
    <div className="container-fluis nav_bg">
      <div className="row">
        <div className="col mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <NavLink className="navbar-brand" to="/">Todo</NavLink>
              {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></button> */}

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  {user ? <li className="nav-item">
                      <NavLink className="nav-link active" exact activeClassName="active_class" aria-current="page" onClick={() => {
                        fire.auth().signOut();
                        alert("Log out Successfully")
                      }} to="/">Log out</NavLink>
                    </li> :
                    <li className="nav-item">
                      <NavLink className="nav-link active" exact activeClassName="active_class" aria-current="page" to="/signup">Sign up</NavLink>
                    </li>
                  }
                </ul>

              </div>
            </div>
          </nav>

        </div>
      </div>
    </div>
  </>
  )
}
export default Navbar