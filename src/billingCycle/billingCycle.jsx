import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BillingCycleList from '../billingCycle/billingCycleList'
import { selectTab, showTabs } from '../common/tab/tabActions'
import TabContent from '../common/tab/tabContent'
import TabHeader from '../common/tab/tabHeader'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import { create, exclude, update } from './billingCycleActions'
import BillingCycleForm from './billingCycleForm'
class BillingCycle extends Component {

  componentWillMount() {
    this.props.selectTab('tabList')
    this.props.showTabs('tabList', 'tabCreate')
  }

  render() {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamentos' subtitle='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <BillingCycleList />
              </TabContent>
              <TabContent id='tabCreate'>
                <BillingCycleForm
                  onSubmit={this.props.create}
                  submitClass='primary'
                  submitLabel='Incluir'
                />
              </TabContent>
              <TabContent id='tabUpdate'>
                <BillingCycleForm
                  onSubmit={this.props.update}
                  submitClass='info'
                  submitLabel='Alterar'
                />
              </TabContent>
              <TabContent id='tabDelete'>
                <BillingCycleForm
                  onSubmit={this.props.exclude}
                  readOnly={true}
                  submitClass='danger'
                  submitLabel='Excluir'
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectTab, showTabs, create, update, exclude }, dispatch)
}

export default connect(null, mapDispatchToProps)(BillingCycle)