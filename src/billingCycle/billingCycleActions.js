import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {
  return (dispatch) => {
    axios.post(`${BASE_URL}/billingCycles`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Cadastro realizado com sucesso!')
        // Passar o array para o dispatch só é possível pelo redux-multi(middleware)
        dispatch([
          resetForm('billingCycleForm'),
          getList(),
          selectTab('tabList'),
          showTabs('tabList', 'tabCreate')
        ])
      })
      .catch(e => {
        e.response.data.erros.forEach(error => toastr.error('Erro', error))
      })
  }
}