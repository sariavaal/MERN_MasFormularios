import { useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabLabels, tabContents, tabCallbacks }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (tabCallbacks && tabCallbacks[index]) {
      tabCallbacks[index]();
    }
  };

  return (
    <div className="tabs-container">
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            {tabLabels.map((label, index) => (
              <li className="nav-item" key={index}>
                <button className={`nav-link ${activeTab === index ? 'active' : ''}`} onClick={() => handleTabClick(index)}>{label}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-body">
          {tabContents[activeTab]}
        </div>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabLabels: PropTypes.arrayOf(PropTypes.string),
  tabContents: PropTypes.arrayOf(PropTypes.node),
  tabCallbacks: PropTypes.arrayOf(PropTypes.func),
};

export default Tabs;