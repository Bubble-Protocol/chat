import React from "react";
import "./style.css";
import { stateManager } from "../../../state-context";
import { ChatScreen } from "../ChatScreen/ChatScreen";

export const Desktop = () => {

  const online = stateManager.useStateData('online')();
  const appState = stateManager.useStateData('app-state')();
  const chat = stateManager.useStateData('chat')();

  console.debug('Desktop', online, chat);


  const html = (
    <div className="desktop">

      {/* Header */}
      <header className="header">
        <h1 className="title">HushBubble</h1>
        <div className="spacer" />
        {!online && <div className="connecting-indicator"><span>offline</span><span className="loader loader-small"></span></div> }
        <a class="header-link no-mobile" href="https://bubbleprotocol.com/chat/about.html">What is HushBubble?</a>
        <a class="header-link mobile" href="https://bubbleprotocol.com/chat/about.html">What is it?</a>
      </header>

      {/* Content */}
      <div className="content">

        {appState === 'initialised' && chat && <ChatScreen chat={chat} />}

      </div>

    </div>
  );

  return html;
};
