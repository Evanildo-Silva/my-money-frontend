const INIT_STATE = {
  list: []
}

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case 'BILLING_CYCLES_FETCHED':
      return { ...state, list: action.payload.data }
    default:
      return state
  }
}