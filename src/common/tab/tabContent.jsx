import React, { Component } from 'react'
import { connect } from 'react-redux'

class TabContent extends Component {

  render() {
    const selected = this.props.tab.selected === this.props.id
    const visible = this.props.tab.visible[this.props.id]
    if (visible) {
      return (
        <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
          {this.props.children}
        </div>
      )
    } else {
      return null
    }
  }
}

function mapStateToProps(state) {
  return { tab: state.tab }
}

export default connect(mapStateToProps)(TabContent)