import React, { Component } from "react";
import DraggableContainer from "./DraggableContainer";
import SpeechAction from "./SpeechAction";

import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <h1 className="sidebar__header-title">Symbols</h1>
          {this.props.children}
        </div>
        <div className="speech-actions-list">
          {this.props.availableIcons.map((icon, index) => {
            return (
              <div className="speech-actions-list__item" key={index}>
                <DraggableContainer icon={icon}>
                  <SpeechAction type={'list-item'} speechAction={icon} />
                </DraggableContainer>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Sidebar;
