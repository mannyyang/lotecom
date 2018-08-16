import React, { Component } from "react";
import { Card, Button, SelectMenu, TriangleIcon } from "evergreen-ui";
import DroppableContainer from "./DroppableContainer";
import SpeechAction from "./SpeechAction";

class EyeGazeTemplate extends Component {
  render() {
    return (
      <div className="eye-gaze-template">
        <Card
          elevation={1}
          width="100%"
          height="auto"
          padding={10}
          marginBottom={20}
          className="top-bar"
        >
          <SelectMenu
            title="Select Language"
            hasFilter={false}
            options={this.props.languages}
            selected={this.props.language}
            onSelect={this.props.onSelect}
          >
            <Button marginRight={10}>
              Language:{" "}
              {this.props.language || "Select Language"}
              <TriangleIcon width="auto" marginLeft={5} aim="down" />
            </Button>
          </SelectMenu>
          <Button float="right" appearance="blue" onClick={this.props.onClear}>Clear</Button>
        </Card>
        <div className="template-container">
          {this.props.selectedIcons.map((speechAction, index) => {
            return (
              <div className="template__placeholder" key={index}>
                <DroppableContainer position={index} onDrop={this.props.onDrop}>
                  <SpeechAction
                    type={"template-item"}
                    speechAction={speechAction}
                    language={this.props.language}
                  />
                </DroppableContainer>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default EyeGazeTemplate;
