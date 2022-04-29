import React from "react";
import axios from "axios";
// import className from "className";

class TaskList extends React.Component {
  state = {
    task: "",
  };
  onDeleteClick = () => {
    console.log("inside delete");
  };
  onSubmitClick = () => {
    axios.post("http://localhost:3000/addTask", {
      task: this.state.task,
    });
  };
  render() {
    // console.log(this.state.task);
    return (
      <div>
        <div>taskList</div>
        <div className="ui input">
          <input
            value={this.state.task}
            onChange={(e) => this.setState({ task: e.target.value })}
            placeholder="your tasks..."
          />
        </div>

        <button
          className="ui primary button basic"
          onClick={() => this.onSubmitClick()}
        >
          Submit
        </button>

        <hr />

        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">Elliot Fu</div>
              <div className="meta">Friends of Veronika</div>
              <div className="description">
                Elliot requested permission to view your contact details
              </div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div
                  className="ui basic blue button"
                  onClick={this.onSubmitClick}
                >
                  Submit
                </div>
                <div
                  className="ui basic red button"
                  onClick={this.onDeleteClick}
                >
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
