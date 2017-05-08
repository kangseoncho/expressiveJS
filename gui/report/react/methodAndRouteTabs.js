import React, { Component } from 'react';

class MethodAndRouteTabs extends Component {

  initClassName(element, index) {
    if (this.props.openTabs[index].length === 0) return undefined;
    return this.props.openTabs[index][element];
  }

  render() {
    //render tabs into the tab div
    //console.log(this.props.openTabs)
    let tabs = this.props.openTabs.map((element, index) => {
      return <div key={index} className={"flex-tab " + this.initClassName(Object.keys(element)[0], index)}>
        <img className="tabLogo" src="./../public/images/whiteTabLogo@2x.png" />
        <button className={"tabs " + this.initClassName(Object.keys(element)[0], index)} onClick={() => { this.props.displayReport(Object.keys(element)[0]); this.props.initAndHighlightTab(Object.keys(element)[0]) }}>{Object.keys(element)[0].toLowerCase()}</button>
        <span className={"hover cancel"} onClick={() => this.props.closeTab(index)}>x</span>
      </div>
    });

    return (
      <div id="tabsMenu">
        {tabs}
      </div>
    )
  }
}

export default MethodAndRouteTabs;