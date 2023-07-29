import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'
import textField from '../common/form/textField'
import { init } from './billingCycleActions'

class BillingCycleForm extends Component {

  render() {
    // Buscando func. detro do this.props já que possui um decoretor com o reduxForm
    const { handleSubmit } = this.props

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field
            name='name'
            component={textField}
            label='Nome'
            placeholder='Informe um nome'
            cols='12 4'
          />
          <Field
            name='month'
            component={textField}
            type='number'
            label='Mês'
            placeholder='Informe o mês'
            cols='12 4'
          />
          <Field
            name='year'
            component={textField}
            type='number'
            label='Ano'
            placeholder='Informe o ano'
            cols='12 4'
          />
        </div>
        <div className='box-footer'>
          <button type='submit' className='btn btn-primary'>Submit</button>
          <button
            type='button'
            className='btn btn-default'
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ init }, dispatch)
}

export default connect(null, mapDispatchToProps)(BillingCycleForm)