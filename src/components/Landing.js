import React, { Component } from 'react';

class Landing extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    onParkClick = evt => {
        this.props.history.push("/Park")
    }
    onExtendClick = evt => {
        this.props.history.push("/Extend")
    }
    onSettingsClick = evt => {
        this.props.history.push("/Park")
    }
  render() {
    return (
        <React.Fragment>
         <div className ="form-group">
        <button
        style={{ minWidth: "20vw", maxWidth: "20vw", minHeight:"10vw", maxHeight: "10vw" }}
        type="button"
        className="btn btn-primary"
        onClick={this.onParkClick}
      >Park
      </button>
        <hr/>
      <button
        style={{ minWidth: "20vw", maxWidth: "20vw", minHeight:"10vw", maxHeight: "10vw" }}
        type="button"
        className="btn btn-primary"
        onClick={this.onExtendClick}
      >Extend
      </button>
      <hr/>
      <button
        style={{ minWidth: "20vw", maxWidth: "20vw", minHeight:"10vw", maxHeight: "10vw" }}
        type="button"
        className="btn btn-primary"
        onClick={this.onSettingsClick}
      >Settings
      </button>
      </div>
      </React.Fragment>
    );
  }
}

export default Landing;
