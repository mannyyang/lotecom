import React from "react";
// import { findDOMNode } from "react-dom";
import { DropTarget } from "react-dnd";

import "./DroppableContainer.css";

// Drag sources and drop targets only interact
// if they have the same string type.
// You want to keep types in a separate file with
// the rest of your app's constants.
const Types = {
  CHESSPIECE: "CARD"
};

/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
const dropTarget = {
  // canDrop(props, monitor) {
  //   // You can disallow drop based on props or item
  //   const item = monitor.getItem();
  //   return canMakeChessMove(item.fromPosition, props.position);
  // },

  hover(props, monitor, component) {
    // This is fired very often and lets you perform side effects
    // in response to the hover. You can't handle enter and leave
    // here—if you need them, put monitor.isOver() into collect() so you
    // can just use componentWillReceiveProps() to handle enter/leave.
    // You can access the coordinates if you need them
    // const clientOffset = monitor.getClientOffset();
    // const componentRect = findDOMNode(component).getBoundingClientRect();
    // You can check whether we're over a nested drop target
    // const isJustOverThisOne = monitor.isOver({ shallow: true });
    // You will receive hover() even for items for which canDrop() is false
    // const canDrop = monitor.canDrop();
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      return;
    }

    // Obtain the dragged item
    const item = monitor.getItem();

    console.log("dropped", item, props.position);
    props.onDrop(item, props.position);
    // You can do something with it
    // ChessActions.movePiece(item.fromPosition, props.position);

    // You can also do nothing and return a drop result,
    // which will be available as monitor.getDropResult()
    // in the drag source's endDrag() method
    return { moved: true };
  }
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

// function setDnDBackground(isOver, canDrop) {
//   if (isOver && canDrop) {
//     return "droppable-container--over";
//   } else if (!isOver && canDrop) {
//     return "droppable-container--open";
//   } else if (isOver && !canDrop) {
//     return "red";
//   } else {
//     return "";
//   }
// }

class DroppableContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!this.props.isOver && nextProps.isOver) {
      // You can use this as enter handler
    }

    if (this.props.isOver && !nextProps.isOver) {
      // You can use this as leave handler
    }

    if (this.props.isOverCurrent && !nextProps.isOverCurrent) {
      // You can be more specific and track enter/leave
      // shallowly, not including nested targets
    }
  }

  render() {
    // Your component receives its own props as usual
    // const { position } = this.props;

    // These props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isOver, canDrop, connectDropTarget } = this.props;

    return connectDropTarget(
      <div
        className={`droppable-container`}
      >
        {this.props.children}
        {canDrop && (
          <div className="droppable-container__overlay droppable-container--open" />
        )}
        {isOver && (
          <div className="droppable-container__overlay droppable-container--over" />
        )}
      </div>
    );
  }
}

export default DropTarget(Types.CHESSPIECE, dropTarget, collect)(
  DroppableContainer
);
