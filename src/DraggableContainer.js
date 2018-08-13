// Let's make <Card text='Write the docs' /> draggable!

import React, { Component } from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
// import { ItemTypes } from "./Constants";

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      icon: props.icon
    };
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const propTypes = {
  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};

class DraggableContainer extends Component {
  render() {
    const { isDragging, connectDragSource } = this.props;
    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1 }}>{this.props.children}</div>
    );
  }
}

DraggableContainer.propTypes = propTypes;

// Export the wrapped component:
export default DragSource("CARD", cardSource, collect)(DraggableContainer);
