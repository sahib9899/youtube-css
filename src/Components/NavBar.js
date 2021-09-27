import React from "react";
import logo from './logo.svg';
import searchIcon from './search-icon.svg'
import createVideo from './createVideo.svg'
import apps from './apps.svg'
import bell from './bell.svg'
import user from './user.svg'

const NavBar = () => {

  return (
    <div className='header'>
      <a href="#">
        <img src={logo} alt='YouTube logo' className='youtube-logo' />
        </a>
        <form className="search-bar">
          <input className="search-input" type="search" 
          placeholder="Search" aria-label="Search" />
          <button type='submit' className='search-btn'>
         
          
            <img src={searchIcon} />
     
          
          </button>
        </form>
        <div className='menu-icons'>
          <img src={createVideo} alt='upload video' />
          <img src={apps} alt='apps'/>
          <img src={bell} alt='Notifications'/>
          <img src={user} alt='login user' />
        </div>
    </div>
  );
};

export default NavBar;
