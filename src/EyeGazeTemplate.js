import React, { Component } from "react";
import DroppableContainer from "./DroppableContainer";
import SpeechAction from "./SpeechAction";

class EyeGazeTemplate extends Component {
  render() {
    return (
      <div className="eye-gaze-template">
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
