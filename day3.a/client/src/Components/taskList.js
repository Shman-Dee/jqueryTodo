import React from "react";

class TaskList extends React.Component {
  state = {
    task: "",
  };
  onDeleteClick = () => {
    console.log("inside delete");
  };

  render() {
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

        <button className="ui primary button basic">
          <i className="right arrow icon"></i> Submit
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
                <div className="ui basic green button">Done</div>
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
