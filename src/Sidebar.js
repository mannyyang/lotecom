import React, { Component } from "react";
import DraggableContainer from "./DraggableContainer";
import SpeechAction from "./SpeechAction";

import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h1>Symbols</h1>
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
