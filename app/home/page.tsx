
import React from "react";
import Navbar from "@/components/dashboard/topnavbar";
const chats = [
  { id: 1, name: "John Doe", lastMessage: "Hey, what's up?", online: true },
  { id: 2, name: "Sarah", lastMessage: "See you tomorrow", online: false },
  { id: 3, name: "Team Group", lastMessage: "Meeting at 5 PM", online: true },
];

const MainPage: React.FC = () => {
  return (
    <div className=" bg-[#122733] rounded-xl  order-2 lg:order-1
    ">
         <Navbar />
   <div className="container">
   
  <div className="sidebar">
    <h3 className="sidebar-title">Chats</h3>

    <div className="chat-item">
      <div className="avatar-wrapper">
        <img className="avatar" src="https://i.pravatar.cc/40" />
        <span className="online-dot" />
      </div>

      <div>
        <div className="chat-name">John Doe</div>
        <div className="last-message">Hey, what's up?</div>
      </div>
    </div>
  </div>

  <div className="chat-area">
    <div className="empty-state">
      <h1 className="welcome-title">Welcome 💬</h1>
      <p className="welcome-text">
        Select a chat to start messaging
      </p>
    </div>
  </div>
</div>
</div>
  );
};

export default MainPage;
