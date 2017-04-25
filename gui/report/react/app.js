import React, { Component } from 'react';
import Method from './method';
import Route from './route';
import Report from './report';
const watchData = require('./../../../watchDog.json');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchData,
      userRoutes: [],
      userReports: []
    };
    this.displayRoute = this.displayRoute.bind(this);
    this.displayReport = this.displayReport.bind(this);
  }

  displayRoute(method) {
    //our method is get or post (for right now)
    let tempRoute = [];
    const clearReport = []

    Object.keys(this.state.watchData).map((element) => {
      if (this.state.watchData[element]['method'] === method) {
        tempRoute.push(element)
      }
    })
    this.setState({ userRoutes: tempRoute });
    //clear off timeline text if already populated
    this.setState({ userReports: clearReport });
  }

  displayReport(route) {
    let tempReport = [];

    Object.keys(this.state.watchData).map((element) => {
      if (element === route) {
        tempReport = (this.state.watchData[route]['timeline'])
      }
    })
    this.setState({ userReports: tempReport });
  }

  render() {
    return (
      <div>
        <div className="title"> Your Server Route Results! </div>

        <div className="App flex-container">

          <Method watchData={this.state.watchData} userRoutes={this.state.userRoutes} userReports={this.state.userReports}
            displayRoute={this.displayRoute} displayReport={this.displayReport} />

          <Route watchData={this.state.watchData} userRoutes={this.state.userRoutes} userReports={this.state.userReports}
            displayRoute={this.displayRoute} displayReport={this.displayReport} />

          <Report watchData={this.state.watchData} userRoutes={this.state.userRoutes} userReports={this.state.userReports}
            displayRoute={this.displayRoute} displayReport={this.displayReport} />

        </div>
      </div>
    );
  }
}

export default App;
