import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import textField from '../common/form/textField'

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
        </div>
      </form>
    )
  }
}

export default reduxForm({ form: 'billiCycleForm' })(BillingCycleForm)