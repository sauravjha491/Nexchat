import React from "react";
import { FiSearch, FiMessageSquare, FiSettings } from "react-icons/fi";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      {/* Left */}
      <div className="nav-left">
        <span className="logo">NEXchat</span>
      </div>

      {/* Center */}
      <div className="nav-center">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search chats..."
          className="search-input"
        />
      </div>

      {/* Right */}
      <div className="nav-right">
        <div className="icon-wrapper">
          <FiMessageSquare className="icon"
          size={25}
          />
          <span className="badge"></span>
        </div>

        <FiSettings className="icon" size={25} />

        <div className="avatar-wrapper">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="avatar"
          />
          <span className="online-dot" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
