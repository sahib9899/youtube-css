import React from "react";
import "../Styles.css";
import HomeLogo from "./Icons/HomeLogo.svg";
import ExploreLogo from "./Icons/ExploreLogo.svg";
import SubscriptionsLogo from "./Icons/SubscriptionsLogo.svg";
import LibraryLogo from "./Icons/LibraryLogo.svg";
import HistoryLogo from "./Icons/HistoryLogo.svg";
import WatchLater from "./Icons/WatchLater.svg";

const MenuBar = () => {
  return (
    <div className="menubar-2">
      <section className="menubar-section-2">
        <br />
        <div className="menu-name-2 active">
          <img className="menu-icon" src={HomeLogo} />
          &nbsp;Home
        </div>

        <div className="menu-name-2">
          <img className="menu-icon" src={ExploreLogo} />
           &nbsp;Explore
        </div>

        <div className="menu-name-2">
          <img className="menu-icon" src={SubscriptionsLogo} />
          Subscription
        </div>

        <hr />

        <div className="menu-name-2">
          <img className="menu-icon" src={LibraryLogo} />
          &nbsp;Library
        </div>

        <div className="menu-name-2">
          <img className="menu-icon" src={HistoryLogo} />
          History
        </div>

        <div className="menu-name-2">
          <img className="menu-icon" src={WatchLater} />
          &nbsp;WatchLater
        </div>
      </section>
    </div>
  );
};

export default MenuBar;
