import React from 'react';
import { Link } from 'react-router-dom';


import classes from './Sidebar.scss';

const Sidebar = () => (
  <div className="col-md-2">
    <nav id="sidebar">
      <div className="sidebar-header">
        <h4><Link to="/" href="/" className={classes.title}>Transaction Analyzer</Link></h4>
      </div>
      <ul className="list-unstyled components">
        {/* <p>Dummy Heading</p> */}
        {/* <li className="active">
          <Link to="/transactions" className={classes.title}>Transactions</Link>
          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
          <ul className="collapse list-unstyled" id="homeSubmenu">
            <li />
            <li>
              <a href="#">Home 2</a>
            </li>
            <li>
              <a href="#">Home 3</a>
            </li>
          </ul>
        </li> */}
        <li>
          <Link to="/transactions" href="/transactions" className={classes.title}>Transactions</Link>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
