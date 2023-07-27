import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Row from '../common/layout/row'
import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import ValueBox from '../common/widget/valueBox'
import { getSummary } from './dashboardActions'

class Dashboard extends Component {

  componentWillMount() {
    this.props.getSummary()
  }

  render() {
    const { credit, debt } = this.props.summary
    return (
      <div>
        <ContentHeader title='Dashboard' subtitle='Versão 1.0' />
        <Content>
          <Row>
            <ValueBox
              cols='12 4'
              color='green'
              icon='bank'
              value={`R$ ${credit}`}
              text='Total de Créditos'
            />
            <ValueBox
              cols='12 4'
              color='red'
              icon='credit-card'
              value={`R$ ${debt}`}
              text='Total de débitos'
            />
            <ValueBox
              cols='12 4'
              color='blue'
              icon='money'
              value={`R$ ${credit - debt}`}
              text='Valor consolidado'
            />
          </Row>
        </Content>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    summary: state.dashboard.summary
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSummary }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)