import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INIT_VALUES = {}

export function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values) {
  return submit(values, 'post')
}

export function update(values) {
  return submit(values, 'put')
}

export function exclude(values) {
  return submit(values, 'delete')
}

function submit(values, method) {
  return (dispatch) => {
    const id = values._id ? values._id : ''
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizado com sucesso!')
        dispatch(init())
      })
      .catch(e => {
        e.response.data.erros.forEach(error => toastr.error('Erro', error))
      })
  }
}

// TODO: refatorar essas funções show...
export function showUpdate(billingCycle) {
  // Retornar um array de actions só é possível pelo redux-multi(middleware)
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function showDelete(billingCycle) {
  // Retornar um array de actions só é possível pelo redux-multi(middleware)
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function init() {
  // Retornar um array de actions só é possível pelo redux-multi(middleware)
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INIT_VALUES)
  ]
}