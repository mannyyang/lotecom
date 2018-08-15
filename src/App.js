import React, { Component } from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { SelectMenu, Button } from "evergreen-ui";
import EyeGazeTemplate from "./EyeGazeTemplate";
import Sidebar from "./Sidebar";
import data from "./data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      availableIcons: data,
      selectedIcons: Array(12).fill({}),
      language: "english",
      languages: [
        {
          label: "English",
          value: "english"
        },
        {
          label: "Korean",
          value: "korean"
        },
        {
          label: "Chinese",
          value: "chinese"
        },
        {
          label: "Spanish",
          value: "spanish"
        }
      ]
    };

    window._APP_ = this;
  }

  onDrop = (item, position) => {
    const updatedIcons = this.state.selectedIcons.map((icon, index) => {
      if (position === index) {
        return { ...item.icon };
      }
      return icon;
    });

    this.setState({
      selectedIcons: updatedIcons
    });
  };

  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="App">
          <Sidebar availableIcons={this.state.availableIcons}>
            <SelectMenu
              title="Select Language"
              hasFilter={false}
              options={this.state.languages}
              selected={this.state.language}
              onSelect={item => this.setState({ language: item.value })}
            >
              <Button>{this.state.selected || "Select Language"}</Button>
            </SelectMenu>
          </Sidebar>
          <EyeGazeTemplate
            selectedIcons={this.state.selectedIcons}
            onDrop={this.onDrop}
            language={this.state.language}
          />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default App;
