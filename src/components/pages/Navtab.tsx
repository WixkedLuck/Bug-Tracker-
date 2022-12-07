import React from 'react';

import '../styles/Navbar.css';
import  {GiAnt} from "react-icons/gi";
 function Nav({currentPage,handlePageChange}: any) {
  
  
    return (
        <nav className="navbar navbar-expand-lg bg">
        <div className="container-fluid">
            <GiAnt/>
          <a className="navbar-brand"  >Bug Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={currentPage === 'About' ? 'nav-link active' : ' nav-link notactive'}  href="#home" onClick={() => handlePageChange('Home')}>Home</a>
              </li>
              <li className="nav-item">
                <a className={currentPage === 'Projects' ? 'nav-link active' : ' nav-link notactive'}href="#app" onClick={() => { handlePageChange('App')}}>App</a>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
      
    );
}
export default Nav;