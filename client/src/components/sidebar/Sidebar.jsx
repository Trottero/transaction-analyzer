import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar" id="sidebar">
    <div className="sidebar-header">
      <h4>
        <Link to="/" href="/" >Transaction Analyzer</Link>
      </h4>
    </div>
    <ul className="list-unstyled components">
      <li>
        <Link to="/transactions" href="/transactions">Transactions</Link>
      </li>
      <li>
        <Link to="/specificview" href="/specificview">Stacked Graphs</Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
