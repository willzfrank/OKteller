import React, { useEffect, useState } from "react";

const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (element) => {
      if (React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);

  return (
    <div className="">
      <ul className="nav">
        {tabsData.map(({ tab }, idx) => (
          <l1 className="nav-item">
            <a
              className={`nav-link ${idx === activeTab ? "active" : ""}`}
              href="#"
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </a>
          </l1>
        ))}
      </ul>

      <div className="tab-content p-3">
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return { children };
};

Tab.TabPane = TabPane;

export default Tab;
