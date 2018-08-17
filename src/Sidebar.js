import React, { Component } from "react";
import {
  Heading,
  SubHeading,
  IconButton,
  Popover,
  Pane,
  Text
} from "evergreen-ui";
import DraggableContainer from "./DraggableContainer";
import SpeechAction from "./SpeechAction";

import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <Heading size={700} className="sidebar__header-title">
            LOTECOM
          </Heading>
          <SubHeading className="sidebar__header-subtitle">
            Low Tech Communication{" "}
            <Popover
              content={
                <Pane
                  width={240}
                  height={240}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Text>PopoverContent</Text>
                </Pane>
              }
            >
              <IconButton marginLeft={0} appearance="ghost" icon="question" />
            </Popover>
          </SubHeading>
          <Heading paddingTop="20px">Symbols</Heading>
        </div>
        <div className="speech-actions-list">
          {this.props.availableIcons.map((icon, index) => {
            return (
              <div className="speech-actions-list__item" key={index}>
                <DraggableContainer icon={icon}>
                  <SpeechAction type={"list-item"} speechAction={icon} />
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
