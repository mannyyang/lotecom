import React, { Component } from "react";
import Feather from "feather-icons";

import "./SpeechAction.css";

const dragIcon = Feather.icons["more-vertical"].toSvg();

class SpeechAction extends Component {
  render() {
    const { speechAction, type } = this.props;
    const isListItem = type === "list-item";

    let cls = "";

    if (isListItem) {
      cls += " speech-action__item speech-action--border";
    }

    return (
      <div className={"speech-action" + cls}>
        {isListItem && (
          <i
            className="speech-action__drag-handle"
            dangerouslySetInnerHTML={{ __html: dragIcon }}
          />
        )}

        <img
          className="speech-action__img"
          src={speechAction.image}
          alt={speechAction.title}
        />
        <span className="speech-action__title">
          {isListItem ? speechAction.id : speechAction.title}
        </span>
        {!isListItem && (
          <div className="speech-action__translation">
            {speechAction.translation && speechAction.translation.korean}
          </div>
        )}
      </div>
    );
  }
}

export default SpeechAction;
