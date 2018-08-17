import React, { Component } from "react";
import {
  Heading,
  SubHeading,
  IconButton,
  Popover,
  Pane,
  Text,
  Paragraph
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
                  width={250}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  padding={15}
                >
                  <Paragraph size={300}>
                    <Text size={300} fontWeight="bold">About</Text>
                    <br />
                    Communication barriers are a major cause of adverse events
                    in acute care hospitals (Hurting, Nilsen, Happ, &
                    Blackstone, 2015). To facilitate effective patient-provider
                    communication, this app offers patients with limited
                    expressive language abilities or language differences to
                    express basic and immediate wants and needs through
                    individualized communication boards.
                  </Paragraph>
                  <br />
                  <Paragraph size={300}>
                    <Text size={300} fontWeight="bold">How to use?</Text>
                    <br />
                    Drag - drop - print! The selection of symbols
                    are believed to be culturally neutral and universally
                    understood although research is ongoing. Patients can be
                    trained to use their communication boards via eye gaze,
                    pointing, or verbal expression in their native language.
                  </Paragraph>
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
