import React, { Component, Fragment } from "react";
import Feather from "feather-icons";

import "./SpeechAction.css";

const dragIcon = Feather.icons["more-vertical"].toSvg();

const getTranslation = (language, speechAction) => {
  switch (language) {
    case "english":
      return (
        <span className="speech-action__title">{speechAction.english}</span>
      );
    case "korean":
    case "chinese":
    case "spanish":
      return (
        <Fragment>
          <span className="speech-action__title">
            {speechAction[language.toLowerCase()]}
          </span>
          {speechAction.english && (
            <div className="speech-action__translation">
              {speechAction[`${language.toLowerCase()}Romanized`] &&
                `( ${speechAction[`${language.toLowerCase()}Romanized`]} )`}
            </div>
          )}
          {speechAction.english && (
            <div className="speech-action__translation">
              {speechAction.english}
            </div>
          )}
        </Fragment>
      );
    default:
      return <div />;
  }
};

class SpeechAction extends Component {
  render() {
    const { speechAction, type, language } = this.props;
    const isListItem = type === "list-item";
    const isTemplateItem = type === "template-item";
    const isBlank = language === 'blank';

    let cls = "";
    
    isListItem && (cls += " speech-action__item speech-action--border");
    isTemplateItem && (cls += " speech-action__template-item");
    isBlank && (cls += " speech-action--blank");

    return (
      <div className={"speech-action" + cls}>
        {isListItem && (
          <i
            className="speech-action__drag-handle"
            dangerouslySetInnerHTML={{ __html: dragIcon }}
          />
        )}

        {speechAction.id && (
          <img
            className="speech-action__img"
            src={require(`./images/${speechAction.id}.jpg`)}
            alt={speechAction.title}
          />
        )}

        <div className="speech-action__text">
          {isListItem && (
            <span className="speech-action__title">{speechAction.id}</span>
          )}
          {isTemplateItem && getTranslation(language, speechAction)}
        </div>
      </div>
    );
  }
}

export default SpeechAction;
