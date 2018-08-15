import React from "react";
import {connect} from "react-redux";
import Progress from 'react-progressbar';
import "./DialogMessage.css";

class DialogMessage extends React.Component{
  render() {
    const { message, dayLeft, donors, isLoading } = this.props;
    return (
      <div className="main-dialog">
        <div className="progress-bar">
          <Progress completed={75} color={'#ec5623'} />
          <div className="hover-message">
            ${this.props.missingValue} still needed for this project
          </div>
        </div>
        <div className="message-dialog">
          <div className="title">
            <span>Only {this.props.dayLeft} days left</span> to fund this project.
          </div>
          <div className="message">
            Join the <span>{this.props.donors}</span> other donors who have already supported this project. Every dollar helps.
          </div>
          <div className="button-group">
            <button className="ui toggle button">$50</button>
            <button className="positive ui button">Give Now</button>
          </div>
          <div className="question">
            Why give %50
          </div>
        </div>
        <div className="footer button-group">
          <button className="ui toggle button">Save for later</button>
          <button className="ui toggle button">Tell your friends</button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.dialogMessage,
)(DialogMessage);