/*
TODO: add hovering arrow between the returned report div.
*/
import React, { Component } from 'react';

//import in getStateChange from watchDogJSONInterface.js
import JSONInterface from './../public/watchDogJSONInterface';


class Report extends Component {
  render() {
    console.log("reportToGet from report.js: ", this.props.reportToGet)

    //console.log("USER REPORTS", this.props.userReports)
    let report = this.props.userReports.map((element, index) => {
      //facilitate pulling information off of req and res object
      let reqObj = element['req'];
      let resObj = element['res'];

      let stateChangeLogs = JSONInterface.getStateChanges(this.props.json[this.props.reportToGet])
      //console.log("i am stateChangeLogs",stateChangeLogs)

      //information we want off of each timeline object
      return <div key={index} className="report">
        <div className="currentState">
          <h3> State #{index + 1} </h3> <hr />
          <b>request:</b> <br />
          cookie: {reqObj.headers.cookie} <br />
          host: {reqObj.headers.host} <br />
          complete: {reqObj.complete.toString()} <br />

          <br />

          <b>response:</b> <br />
          finished: {resObj.finished.toString()} <br />
          <br />
        </div>
        {/*below are information for arrows*/}
        <div className="stateChanges state-container">
          <div className = "arrow state-item">
            <img src = "http://placekitten.com/g/200/250" />
          </div>
          <div className="changeLogs state-item">
            <b>State Changes:</b> <br />
            duration: {JSONInterface.getStateChanges(this.props.json)[0].duration} ms<br />
            Request Summaries: {this.props.requestSummaries(stateChangeLogs)} <br />
            Response Summaries: {this.props.responseSummaries(stateChangeLogs)} <br />
          </div>
        </div>

        <br />
      </div>
    });

    return (
      <div id="reportColumn" className="flex-item">
        {report}
      </div>
    );
  }
}

export default Report;