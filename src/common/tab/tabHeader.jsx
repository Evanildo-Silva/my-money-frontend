import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectTab } from './tabActions'

class TabHeader extends Component {

  render() {
    const selected = this.props.tab.selected === this.props.target
    return (
      <li className={selected ? 'active' : ''}>
        <a
          href='javascript:;' // iginorar o click
          data-toggle='tab'
          onClick={() => this.props.selectTab(this.props.target)}
          data-target={this.props.target}
        >
          <i className={`fa fa-${this.props.icon}`} />
          {` ${this.props.label}`}
        </a>
      </li>
    )
  }
}

function mapStateToProps(state) {
  return {
    tab: state.tab
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTab }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)