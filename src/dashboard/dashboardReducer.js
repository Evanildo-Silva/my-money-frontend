const INIT_STATE = {
  summary: {
    credit: 0,
    debt: 0
  }
}

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case 'BILLING_SUMMARY_FETCHED':
      return { ...state, summary: action.payload.data }
    default:
      return state
  }
}