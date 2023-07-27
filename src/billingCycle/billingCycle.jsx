import React, { Component } from 'react'

import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
class BillingCycle extends Component {

  render() {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamentos' subtitle='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader />
            <TabsContent>

            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

export default BillingCycle