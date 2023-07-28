import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getList } from './billingCycleActions'

class BillingCycleList extends Component {

  componentWillMount() {
    this.props.getList()
  }

  render() {
    const renderRows = () => {
      const list = this.props.list || []
      return list.map((itemList) => (
        <tr key={itemList._id}>
          <td>{itemList.name}</td>
          <td>{itemList.month}</td>
          <td>{itemList.year}</td>
        </tr>
      ))
    }

    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.billingCycle.list
  }
}

function mapDispatchToprops(dispatch) {
  return bindActionCreators({ getList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToprops)(BillingCycleList)