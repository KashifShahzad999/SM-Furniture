import React, { Component } from 'react';
import '../main.css'

class TabsComponent extends Component {
  state = {
    activeTab: this.props.children[0].props.label
  };

  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    let content;
    let buttons = [];

    React.Children.forEach(this.props.children, child => {
      buttons.push(child.props.label);
      if (child.props.label === this.state.activeTab) {
        content = child.props.children;
      }
    });

    return (
        <div className="tabs">
        <div className='tabs-detail-btn'>
          {buttons.map((button) => (
            <button
              key={button}
              className={button === this.state.activeTab ? 'active' : ''}
              onClick={() => this.changeTab(button)}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

export default TabsComponent;

