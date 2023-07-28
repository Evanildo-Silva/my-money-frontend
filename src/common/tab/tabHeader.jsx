import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectTab } from './tabActions'

class TabHeader extends Component {

  render() {
    const selected = this.props.tab.selected === this.props.target
    const visible = this.props.tab.visible[this.props.target]
    if (visible) {
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
    } else {
      return null
    }
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